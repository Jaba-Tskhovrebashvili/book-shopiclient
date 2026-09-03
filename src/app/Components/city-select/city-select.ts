import { Component, OnInit, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';
import { AuthorServiceService } from '../../Services/author-service.service';

@Component({
  selector: 'app-city-select',
  standalone: false,
  styleUrl: './city-select.scss',
  templateUrl: './city-select.html',
})
export class CitySelect implements OnInit {
  cities: any[] = [];

  cityPage: number = 1;
  totalCityPage!: number;
  citySearch: string = '';

  selectedcity: any;

  isLoadingcities = false;

  @Output() cityChange = new EventEmitter<any>();

  constructor(
    private authorServiceService: AuthorServiceService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.GetCities('', this.cityPage);
  }

  myScrollHandler = (event: any) => {

    const target = event.originalEvent.target as HTMLElement;

    const scrollTop = target.scrollTop;
    const clientHeight = target.clientHeight;
    const scrollHeight = target.scrollHeight;

    if (
      scrollTop + clientHeight >= scrollHeight - 40 &&
      !this.isLoadingcities &&
      this.cityPage < this.totalCityPage
    ) {

      const nextPage = this.cityPage + 1;

      this.isLoadingcities = true;

      this.GetCities(
        this.citySearch,
        nextPage
      );
    }
  };

  GetCities(search: string, page: number) {

    this.authorServiceService.GetCities(search, page).subscribe({
      next: (response) => {

        if (page === 1) {

          this.cities = response.cities.cities;

        } else {

          this.cities.push(
            ...response.cities.cities
          );

        }

        this.totalCityPage =
          response.cities.totalPages;

        this.cityPage = page;

        this.isLoadingcities = false;

        this.cdr.detectChanges();
      },

      error: (error) => {

        console.error('CITY ERROR:', error);

        this.isLoadingcities = false;
      }
    });
  }

  onCityFilter(event: any) {

    this.citySearch = event.filter;

    this.cityPage = 1;

    this.GetCities(
      this.citySearch,
      this.cityPage
    );
  }

  onCityChange(event: any) {

    this.selectedcity = event;

    this.cityChange.emit(event);
  }

}
