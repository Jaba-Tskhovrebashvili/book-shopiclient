import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Paginator } from 'primeng/paginator';
import { AuthorServiceService } from '../Services/author-service.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Location } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: false,
  styleUrl: './home.scss',
  templateUrl: './home.html',
})

export class Home implements OnInit {
  page: number = 1
  first: number = 0;
  rows: number = 10;
  public totalPage: number = 60;

  cityId!: number;
  countryId!: number;
  authorSexId!: number;
  authorSearch: string = "";
  searchTimeout: any;
  authors: any[] = [];
  constructor(private authorServiceService: AuthorServiceService,
    private cdr: ChangeDetectorRef,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private location: Location) { }
  ngOnInit(): void {

    this.getAuthors(this.authorSearch, this.cityId, this.countryId, this.authorSexId, this.page)

  }
  loadAuthors() {
    this.getAuthors(
      this.authorSearch,
      this.cityId,
      this.countryId,
      this.authorSexId,
      this.page
    );
  }
  onPageChange(event: any) {
    this.first = event.first ?? 0;
    this.rows = event.rows ?? 10;
    this.page = event.page + 1;
  }


  onCountryChange(event: any) {
    this.countryId = event?.id
    this.loadAuthors()

  }

  onCityChange(event: any) {
    this.cityId = event?.id
    this.loadAuthors();

  }


  onAuthorSexChange(event: any) {
    this.authorSexId = event?.id
    this.loadAuthors()

  }
  onSearchChange(event: any) {
    this.authorSearch = event
    this.loadAuthors();
  }


  getAuthors(search: string, cityId: number, countryId: number, sexId: number, page: number) {
    this.authorServiceService.GetAuthorsProfile(search, cityId, countryId, sexId, page).subscribe({
      next: (response) => {

        this.authors = response.authors.authors;
        this.totalPage = (response.authors.totalPages * 10)
        this.cdr.detectChanges();
      },
      error: (error) => {

      }
    })
  }

  confirm2(event: Event, authorId: number) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'ნამდვილად გსურთ ავტორის წაშლა??',
      icon: 'pi pi-info-circle',
      acceptButtonStyleClass: 'p-button-danger p-button-sm',
      accept: () => {
        this.authorServiceService.DeleteAuthor(authorId).subscribe({
          next: (response) => {
            this.messageService.add({
              severity: 'success',
              summary: 'Success',
              detail: response.message,
            });
            setTimeout(() => {
              this.location.historyGo(0);
            }, 2000);
          },
          error: (err) => {
            this.messageService.add({
              severity: 'error',
              summary: 'Error',
              detail: err.error.message,
            });
          }
        })

      },
      reject: () => {
        this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
      }
    });
  }
}
