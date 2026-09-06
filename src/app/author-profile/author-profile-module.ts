import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DividerModule } from 'primeng/divider';
import { AuthorProfileRoutingModule } from './author-profile-routing-module';
import { AuthorProfile } from './author-profile';
import { HeaderModule } from '../header/header-module';
import { PaginatorModule } from 'primeng/paginator';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [AuthorProfile],
  imports: [CommonModule,
    AuthorProfileRoutingModule,
    DividerModule,
    HeaderModule,
    PaginatorModule,
    TableModule],
})
export class AuthorProfileModule { }
