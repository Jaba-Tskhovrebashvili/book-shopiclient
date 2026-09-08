import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ProductServiceService } from '../Services/product-service.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Location } from '@angular/common';
import { Product } from "../interfaces/product.interface";

@Component({
  selector: 'app-product',
  standalone: false,
  styleUrl: './product.scss',
  templateUrl: './product.html',
})
export class Products implements OnInit {
  page: number = 1;
  ProductType!: number;
  PublishType!: number;
  productSearch: string = "";
  products!: Product[];
  public totalPage!: number;
  first: number = 0;
  rows: number = 10;
  editVisible: boolean = false
  isEdirProduct: boolean = false;
  ProductValue!: Product;


  constructor(private productServiceService: ProductServiceService, private cdr: ChangeDetectorRef,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private location: Location
  ) { }
  ngOnInit(): void {

    const localPage = localStorage.getItem("productPage");
    if (localPage == null) {
      localStorage.setItem("productPage", String(this.page));
    } else {
      this.page = Number(localStorage.getItem("productPage"));
      this.first = (this.page - 1) * 10;
    }

    this.GetProducts(this.ProductType, this.PublishType, this.productSearch, this.page);
  }

  loadProducts() {
    this.GetProducts(this.ProductType, this.PublishType, this.productSearch, this.page);
  }

  GetProducts(typeId: number, publishId: number, search: string, page: number) {
    this.productServiceService.GetProducts(typeId, publishId, search, page).subscribe({
      next: (response) => {
        this.products = response.products.products;
        this.totalPage = (response.products.totalCount * 10)
        this.cdr.detectChanges();
      },
      error: (err) => {

      }
    })
  }
  onProductType(Event: any) {
    this.ProductType = Event?.id;
    this.loadProducts()
  }

  onPublishType(Event: any) {
    this.PublishType = Event?.id;
    this.loadProducts()
  }

  onSearchChange(event: any) {
    this.productSearch = event
    this.loadProducts()
  }
  onPageChange(event: any) {
    this.first = event.first ?? 0;
    this.rows = event.rows ?? 10;
    this.page = event.page + 1;
    localStorage.setItem("productPage", String(event.page + 1));
    this.loadProducts()
  }


  confirm2(event: Event, productId: number) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'ნამდვილად გსურთ პროდუქტის წაშლა??',
      icon: 'pi pi-info-circle',
      acceptButtonStyleClass: 'p-button-danger p-button-sm',
      acceptLabel: "დიახ",
      rejectLabel: "არა",
      accept: () => {
        this.productServiceService.DeleteProduct(productId).subscribe({
          next: (response) => {
            this.messageService.add({
              severity: 'success',
              summary: 'Success',
              detail: response.message,
            });
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
    });
  }

  OnEditVisible() {
    this.editVisible = !this.editVisible
  }

  onVisible() {
    this.isEdirProduct = !this.isEdirProduct;
  }
  OnEditProductVisible(product: any) {
    this.ProductValue = {
      ...product,
      release_date: new Date(product.release_date)
    };
    this.isEdirProduct = !this.isEdirProduct;
  }
}
