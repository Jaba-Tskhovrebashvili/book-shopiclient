import { Component, OnInit, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';
import { AuthorServiceService } from '../../Services/author-service.service';

@Component({
  selector: 'app-admin-sex-select',
  standalone: false,
  styleUrl: './admin-sex-select.scss',
  templateUrl: './admin-sex-select.html',
})
export class AdminSexSelect implements OnInit {

  author_sex: any[] = [];
  selectedSex: any;

  @Output() authorSexChange = new EventEmitter<any>();

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

        this.cdr.detectChanges();
      },

      error: (error) => {

        console.error('CITY ERROR:', error);

      }
    });
  }

  onAuthorSexChange(event: any) {

    this.selectedSex = event;

    this.authorSexChange.emit(event);
  }
}
