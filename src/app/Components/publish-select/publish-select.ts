import { Component, OnInit, ChangeDetectorRef, Output, EventEmitter, Input } from '@angular/core';
import { ProductServiceService } from '../../Services/product-service.service';
import { PublishHouse } from "../../interfaces/publishhouse.interface";

@Component({
  selector: 'app-publish-select',
  standalone: false,
  styleUrl: './publish-select.scss',
  templateUrl: './publish-select.html',
})
export class PublishSelect {

  publishtypes!: PublishHouse[];

  publishPage: number = 1;

  @Input() publishType!: string;

  totalTypePage!: number;
  totalPublishPage!: number;
  publishTypeSearch: string = '';

  selectedPublishType!: PublishHouse;

  @Output() publishTypeChange = new EventEmitter<any>();

  constructor(
    private productServiceService: ProductServiceService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    if (this.publishType) {
      this.GetPublishingHouse(this.publishType, this.publishPage);
    } else {
      this.GetPublishingHouse('', this.publishPage);
    }

  }

  myScrollHandler = (event: any) => {

    const target = event.originalEvent.target as HTMLElement;

    const scrollTop = target.scrollTop;
    const clientHeight = target.clientHeight;
    const scrollHeight = target.scrollHeight;

    if (
      scrollTop + clientHeight >= scrollHeight - 40 && this.publishPage < this.totalPublishPage
    ) {

      const nextPage = this.publishPage + 1;
      this.GetPublishingHouse(
        this.publishTypeSearch,
        nextPage
      );
    }
  }



  GetPublishingHouse(search: string, publishPage: number) {

    this.productServiceService.GetPublishingHouse(search, publishPage).subscribe({
      next: (response) => {
        if (publishPage === 1) {
          this.publishtypes = response.publishing_houses.publishing_houses;
        } else {
          this.publishtypes.push(
            ...response.publishing_houses.publishing_houses
          );
        }
        if (this.publishType) {
          this.selectedPublishType = response.publishing_houses.publishing_houses[0];
        }
        this.totalPublishPage = response.publishing_houses.totalPages
        this.publishPage = publishPage

        this.cdr.detectChanges();
      },

      error: (error) => {
        console.error('TYPE ERROR:', error);

      }
    });
  }

  onTypeFilter(event: any) {
    this.publishTypeSearch = event.filter;
    this.GetPublishingHouse(
      this.publishTypeSearch,
      this.publishPage
    );
    console.log("onTypeFilter", event)
  }

  onTypeChange(event: any) {

    if (this.publishType) {

      this.publishType = '';
      this.publishTypeSearch = '';
      this.publishPage = 1;
      this.GetPublishingHouse('', 1);
      this.publishTypeChange.emit(event);

      return;
    }

    if (event == null) {
      this.publishTypeSearch = '';
      this.GetPublishingHouse(this.publishTypeSearch, this.publishPage);
    }


    this.selectedPublishType = event;

    this.publishTypeChange.emit(event);
  }
}
