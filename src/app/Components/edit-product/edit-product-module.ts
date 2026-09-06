import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditProduct } from './edit-product';
import { DialogModule } from 'primeng/dialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { DatePickerModule } from 'primeng/datepicker';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { IftaLabelModule } from 'primeng/iftalabel';
import { TextareaModule } from 'primeng/textarea';
import { AuthorSelectModule } from '../author-select/author-select-module';
import { InputNumberModule } from 'primeng/inputnumber';
import { ProductTypeSelectModule } from '../product-type-select/product-type-select-module';
import { PublishSelectModule } from '../publish-select/publish-select-module';


@NgModule({
  declarations: [EditProduct],
  imports: [CommonModule,
    DialogModule,
    ToastModule,
    DatePickerModule,
    InputTextModule,
    ButtonModule,
    IftaLabelModule,
    TextareaModule,
    FormsModule,
    AuthorSelectModule,
    InputNumberModule,
    ProductTypeSelectModule,
    PublishSelectModule
  ],
  exports: [EditProduct],
  providers: [ConfirmationService, MessageService]
})
export class EditProductModule { }
