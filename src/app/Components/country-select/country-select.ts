import { Component, OnInit, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';
import { AuthorServiceService } from '../../Services/author-service.service';


@Component({
  selector: 'app-country-select',
  standalone: false,
  styleUrl: './country-select.scss',
  templateUrl: './country-select.html',
})
export class CountrySelect implements OnInit { 

  countries: any[] = [];

  countryPage: number = 1;
  totalCountryPage!: number;
  countrySearch: string = '';

  selectedCountry: any;

  isLoadingCountries = false;

  @Output() countryChange = new EventEmitter<any>();

  constructor(
    private authorServiceService: AuthorServiceService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.GetCountries('', this.countryPage);
  }

  myScrollHandler = (event: any) => {

    const target = event.originalEvent.target as HTMLElement;

    const scrollTop = target.scrollTop;
    const clientHeight = target.clientHeight;
    const scrollHeight = target.scrollHeight;

    if (
      scrollTop + clientHeight >= scrollHeight - 20 &&
      !this.isLoadingCountries &&
      this.countryPage < this.totalCountryPage
    ) {

      const nextPage = this.countryPage + 1;

      this.isLoadingCountries = true;

      this.GetCountries(
        this.countrySearch,
        nextPage
      );
    }
  };

  GetCountries(search: string, page: number) {

    this.authorServiceService.GetCountries(search, page).subscribe({
      next: (response) => {

        if (page === 1) {

          this.countries = response.countries.countries;

        } else {

          this.countries.push(
            ...response.countries.countries
          );

        }

        this.totalCountryPage =
          response.countries.totalPages;

        this.countryPage = page;

        this.isLoadingCountries = false;

        this.cdr.detectChanges();
      },

      error: (error) => {

        console.error('COUNTRY ERROR:', error);

        this.isLoadingCountries = false;
      }
    });
  }

  onCountryFilter(event: any) {

    this.countrySearch = event.filter;

    this.countryPage = 1;

    this.GetCountries(
      this.countrySearch,
      this.countryPage
    );
  }

  onCountryChange(event: any) {

    this.selectedCountry = event;

    this.countryChange.emit(event);
  }

}
