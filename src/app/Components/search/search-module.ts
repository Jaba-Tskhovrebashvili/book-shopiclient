import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Search } from './search';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [Search],
  imports: [CommonModule,
    AutoCompleteModule,
    FormsModule
  ],
  exports: [Search]
})
export class SearchModule { }
