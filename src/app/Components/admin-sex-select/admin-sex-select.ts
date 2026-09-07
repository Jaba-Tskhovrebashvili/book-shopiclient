import { Component, OnInit, ChangeDetectorRef, Output, EventEmitter, Input } from '@angular/core';
import { AuthorServiceService } from '../../Services/author-service.service';
import { AuthorSex } from "../../interfaces/authorsex.interface";

@Component({
  selector: 'app-admin-sex-select',
  standalone: false,
  styleUrl: './admin-sex-select.scss',
  templateUrl: './admin-sex-select.html',
})
export class AdminSexSelect implements OnInit {

  author_sex!: AuthorSex[];
  selectedSex!: AuthorSex;

  @Output() authorSexChange = new EventEmitter<any>();
  @Input() authorSex!: string;
  constructor(
    private authorServiceService: AuthorServiceService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.GetAuthorSex();
  }



  GetAuthorSex() {

    this.authorServiceService.GetAuthorSex().subscribe({
      next: (response) => {

        this.author_sex = response.authorSex;
        if (this.authorSex) {
          this.selectedSex = response.authorSex.find((x: any) => x.sex == this.authorSex)
        }

        this.cdr.detectChanges();
      },

      error: (error) => {

        console.error('CITY ERROR:', error);

      }
    });
  }

  onAuthorSexChange(event: any) {

    if (this.authorSex) {
      this.authorSex = ""
      this.GetAuthorSex();
    }

    this.selectedSex = event;

    this.authorSexChange.emit(event);
  }
}
