import { Component, ChangeDetectorRef, Output, EventEmitter, Input } from '@angular/core';
import { ProductServiceService } from '../../Services/product-service.service';
import { ProductType } from "../../interfaces/product-type.interface";


@Component({
  selector: 'app-product-type-select',
  standalone: false,
  styleUrl: './product-type-select.scss',
  templateUrl: './product-type-select.html',
})
export class ProductTypeSelect {
  producttypes!: ProductType[];
  @Input() productType!: string;

  totalTypePage!: number;
  productTypeSearch: string = '';

  selectedProductType!: ProductType;

  @Output() productTypeChange = new EventEmitter<any>();

  constructor(
    private productServiceService: ProductServiceService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    if (this.productType) {
      this.GetProductTypes(this.productType);
    } else {
      this.GetProductTypes('');
    }

  }



  GetProductTypes(search: string) {

    this.productServiceService.GetProductTypes(search).subscribe({
      next: (response) => {
        this.producttypes = response.product_types.product_types;
        if (this.productType) {
          this.selectedProductType = response.product_types.product_types[0];
        }

        this.cdr.detectChanges();
      },

      error: (error) => {
        console.error('TYPE ERROR:', error);

      }
    });
  }

  onTypeFilter(event: any) {
    this.productTypeSearch = event.filter;
    this.GetProductTypes(
      this.productTypeSearch
    );
  }

  onTypeChange(event: any) {

    if (this.productType) {
      this.productType = ""
      this.GetProductTypes("");
    }

    if (event == null) {
      this.productTypeSearch = '';
      this.GetProductTypes('');
    }


    this.selectedProductType = event;

    this.productTypeChange.emit(event);
  }


}
