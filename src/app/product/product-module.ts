import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from './product';
import { HeaderModule } from '../header/header-module';
import { ProductTypeSelectModule } from '../Components/product-type-select/product-type-select-module';
import { ProductRoutingModule } from './product-routing-module';
import { PublishSelectModule } from '../Components/publish-select/publish-select-module';
import { InputTextModule } from 'primeng/inputtext';
import { SearchModule } from '../Components/search/search-module';
import { PaginatorModule } from 'primeng/paginator';
import { TableModule } from 'primeng/table';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { ConfirmPopup } from 'primeng/confirmpopup';
import { AddProductModule } from '../Components/add-product/add-product-module';
import { EditProductModule } from '../Components/edit-product/edit-product-module';




@NgModule({
  declarations: [Product],
  imports: [CommonModule,
    ProductRoutingModule,
    ProductTypeSelectModule,
    HeaderModule,
    PublishSelectModule,
    InputTextModule, SearchModule,
    PaginatorModule, TableModule,
    ToastModule,
    ConfirmPopup,
    AddProductModule,
    EditProductModule],
  providers: [ConfirmationService, MessageService]
})
export class ProductModule { }
