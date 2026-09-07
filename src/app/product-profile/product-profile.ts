import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductServiceService } from '../Services/product-service.service';
import { Product } from "../interfaces/product.interface"

@Component({
  selector: 'app-product-profile',
  standalone: false,
  styleUrl: './product-profile.scss',
  templateUrl: './product-profile.html',
})
export class ProductProfile implements OnInit {
  productId!: string;
  productProfile!: Product;
  constructor(private route: ActivatedRoute,
    private cdr: ChangeDetectorRef,
    private productServiceService: ProductServiceService,
    private router: Router) { }

  ngOnInit(): void {
    this.productId = String(this.route.snapshot.paramMap.get('id'));
    if (this.productId) {
      this.productServiceService.GetProduct(this.productId).subscribe({
        next: (response) => {
          this.productProfile = response.product;
          if (!this.productProfile) {
            this.router.navigate(["/products"])
          }
          this.cdr.detectChanges();
        },
        error: (err) => {
          console.log(err)
        }
      })
    }
  }
}
