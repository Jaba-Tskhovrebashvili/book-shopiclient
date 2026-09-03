import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing-module';
import { Home } from './home';
import { Header } from '../header/header';
import { Paginator, PaginatorModule } from 'primeng/paginator';
import { FormsModule } from '@angular/forms';
import { SelectModule } from 'primeng/select';
import { CountrySelect } from '../Components/country-select/country-select';
import { CitySelect } from '../Components/city-select/city-select';
import { AdminSexSelect } from '../Components/admin-sex-select/admin-sex-select';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { Search } from '../Components/search/search';
import { TableModule } from 'primeng/table';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { ConfirmPopupModule } from 'primeng/confirmpopup';




@NgModule({
  declarations: [Home, Header, CountrySelect, CitySelect, AdminSexSelect, Search],
  imports: [CommonModule,
    HomeRoutingModule,
    PaginatorModule,
    FormsModule,
    SelectModule,
    AutoCompleteModule,
    TableModule,
    ButtonModule, ToastModule, ConfirmPopupModule],
  providers: [ConfirmationService, MessageService]
})
export class HomeModule { }
