import { Component, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-search',
  standalone: false,
  styleUrl: './search.scss',
  templateUrl: './search.html',
})
export class Search {

  @Output() SearchChange = new EventEmitter<any>();
  searchValue: string = '';

  onSearchChange(event: any) {
    this.SearchChange.emit(event);
  }

}
