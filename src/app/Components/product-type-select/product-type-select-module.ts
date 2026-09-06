import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductTypeSelect } from './product-type-select';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';
import { FormsModule } from '@angular/forms';
import { SelectModule } from 'primeng/select';


@NgModule({
  declarations: [ProductTypeSelect],
  imports: [CommonModule, ButtonModule, ToastModule, SelectModule, FormsModule],
  exports: [ProductTypeSelect],
  providers: [ConfirmationService, MessageService]
})
export class ProductTypeSelectModule { }
