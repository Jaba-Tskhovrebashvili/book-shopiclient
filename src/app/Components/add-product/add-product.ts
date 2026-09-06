import { Component, Output, EventEmitter } from '@angular/core';
import { ProductServiceService } from '../../Services/product-service.service';
import { MessageService } from 'primeng/api';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-product',
  standalone: false,
  styleUrl: './add-product.scss',
  templateUrl: './add-product.html',
})
export class AddProduct {
  ProductValue = {
    name: '',
    annotation: '',
    isbn: '',
    authors: [],
    publishId: 0,
    typeId: 0,
    release_date: null,
    address: '',
    page_quantity: 0
  };
  isAddVisible = true
  value: string = '';
  value1!: number;
  @Output() OnEditVisible = new EventEmitter<any>();
  constructor(private productServiceService: ProductServiceService, private messageService: MessageService, private location: Location) {

  }
  changeVisible() {
    this.isAddVisible = !this.isAddVisible;
    this.OnEditVisible.emit();
  }

  onProductType(Event: any) {
    this.ProductValue.typeId = Event?.id
  }

  onPublishType(Event: any) {
    this.ProductValue.publishId = Event?.id
  }

  ongetAuthors(authors: any) {
    this.ProductValue.authors = authors;
  }

  onSubmit() {
    this.productServiceService.AddProducts(this.ProductValue).subscribe({
      next: (response) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: response.message,
        });
        this.changeVisible();
        setTimeout(() => {
          this.location.historyGo(0);
        }, 2000);
      },
      error: (err) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: err.error.message,
        });
      }
    })
  }
}
