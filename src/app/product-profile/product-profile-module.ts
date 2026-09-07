import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DividerModule } from 'primeng/divider';
import { ProductProfileRoutingModule } from './product-profile-routing-module';
import { HeaderModule } from '../header/header-module';
import { PaginatorModule } from 'primeng/paginator';
import { TableModule } from 'primeng/table';
import { ProductProfile } from './product-profile';


@NgModule({
  declarations: [ProductProfile],
  imports: [CommonModule, ProductProfileRoutingModule,
    DividerModule,
    HeaderModule,
    PaginatorModule,
    TableModule
  ],
})
export class ProductProfileModule { }
