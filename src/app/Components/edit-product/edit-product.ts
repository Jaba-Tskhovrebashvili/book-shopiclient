import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Location } from '@angular/common';
import { ProductServiceService } from '../../Services/product-service.service';


@Component({
  selector: 'app-edit-product',
  standalone: false,
  styleUrl: './edit-product.scss',
  templateUrl: './edit-product.html',
})
export class EditProduct {
  @Input() ProductValue!: any;
  @Input() isEdirProduct: boolean = true;
  @Output() EditProductVisible = new EventEmitter<any>();

  constructor(private productServiceService: ProductServiceService, private messageService: MessageService, private location: Location) { }
  changeVisible() {
    this.EditProductVisible.emit()
  }

  onSubmit() {
    const obj = {
      "name": this.ProductValue.name,
      "annotation": this.ProductValue.annotation,
      "typeId": this.ProductValue.typeId,
      "isbn": this.ProductValue.isbn,
      "release_date": this.ProductValue.release_date,
      "publishId": this.ProductValue.publishId,
      "page_quantity": this.ProductValue.page_quantity,
      "address": this.ProductValue.address,
      "authors": this.ProductValue.authors
    }
    this.productServiceService.EditProducts(obj, this.ProductValue.id).subscribe({
      next: (response) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: response.message,
        });
        this.EditProductVisible.emit()
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

  onProductType(event: any) {
    this.ProductValue.typeId = event?.id
  }
  onPublishType(event: any) {
    console.log("onPublishType", event)
    this.ProductValue.publishId = event?.id
  }

  ongetAuthors(event: any) {

    this.ProductValue.authors = event
  }
}
