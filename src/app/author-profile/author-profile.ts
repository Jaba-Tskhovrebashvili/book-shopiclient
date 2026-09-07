import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthorServiceService } from '../Services/author-service.service';
import { ProductServiceService } from '../Services/product-service.service';
import { Author } from "../interfaces/author.interface";
import { Product } from "../interfaces/product.interface"
@Component({
  selector: 'app-author-profile',
  standalone: false,
  styleUrl: './author-profile.scss',
  templateUrl: './author-profile.html',
})
export class AuthorProfile implements OnInit {
  userId!: string;
  userProfile!: Author;
  productPage: number = 1
  products!: Product[];

  first: number = 0;
  rows: number = 10;
  totalPage!: number;
  constructor(private route: ActivatedRoute,
    private authorServiceService: AuthorServiceService,
    private cdr: ChangeDetectorRef,
    private productServiceService: ProductServiceService) { }
  ngOnInit(): void {
    this.userId = String(this.route.snapshot.paramMap.get('id'));
    if (this.userId) {
      this.authorServiceService.GetAuthorProfile(this.userId).subscribe({
        next: (response) => {
          this.userProfile = response.authors;
          this.cdr.detectChanges();
        },
        error: (err) => {
          console.log(err)
        }
      })

      this.GetAuthorProducts(this.userId, this.productPage);
    }
  }

  GetAuthorProducts(authorId: string, page: number) {
    this.productServiceService.GetAuthorsProduct(authorId, page).subscribe({
      next: (response) => {
        this.products = response.products.products;
        this.totalPage = response.products.totalCount;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  onPageChange(event: any) {
    this.first = event.first ?? 0;
    this.rows = event.rows ?? 10;
    this.productPage = event.page + 1;
  }
}
