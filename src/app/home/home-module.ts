import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing-module';
import { Home } from './home';
import { PaginatorModule } from 'primeng/paginator';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SelectModule } from 'primeng/select';
import { CountrySelect } from '../Components/country-select/country-select';
import { CitySelect } from '../Components/city-select/city-select';
import { AdminSexSelect } from '../Components/admin-sex-select/admin-sex-select';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { TableModule } from 'primeng/table';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { EditAuthor } from '../Components/edit-author/edit-author';
import { DatePickerModule } from 'primeng/datepicker';
import { AddUthor } from '../Components/add-uthor/add-uthor';
import { HeaderModule } from '../header/header-module';

import { RouterModule } from '@angular/router';
import { SearchModule } from '../Components/search/search-module';



@NgModule({
  declarations: [Home, CountrySelect, CitySelect, AdminSexSelect, EditAuthor, AddUthor],
  imports: [CommonModule,
    HomeRoutingModule,
    PaginatorModule,
    FormsModule,
    ReactiveFormsModule,
    SelectModule,
    AutoCompleteModule,
    TableModule,
    ButtonModule,
    ToastModule,
    ConfirmPopupModule,
    DialogModule,
    InputTextModule,
    DatePickerModule,
    HeaderModule, RouterModule,
    SearchModule],
  providers: [ConfirmationService, MessageService]
})
export class HomeModule { }
