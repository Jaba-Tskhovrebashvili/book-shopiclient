import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';


@Injectable({
    providedIn: 'root',
})
export class ProductServiceService {
    private baseUrl = environment.apiUrl;
    constructor(private http: HttpClient,
    ) { }

    GetAuthorsProduct(authorId: string, page: number): Observable<any> {
        return this.http.get(
            `${this.baseUrl}/Product/author-products?authorId=${authorId}&page=${page}`,
        );
    }

    AddProducts(data: any): Observable<any> {
        return this.http.post(
            `${this.baseUrl}/Product/add-product`,
            data
        );
    }

    EditProducts(data: any, authorId: number): Observable<any> {
        return this.http.put(
            `${this.baseUrl}/Product/edit-product/${authorId}`,
            data
        );
    }

    GetProducts(typeId: number, publishId: number, search: string, page: number): Observable<any> {
        let params = new HttpParams();

        if (typeId) {
            params = params.set('typeId', typeId);
        }
        if (publishId) {
            params = params.set('publishId', publishId);
        }
        if (search) {
            params = params.set('search', search);
        }
        params = params.set("page", page)
        return this.http.get(
            `${this.baseUrl}/Product/get-products`,
            { params }
        );
    }

    GetProduct(productId: string): Observable<any> {

        return this.http.get(
            `${this.baseUrl}/Product/get-product/${productId}`

        );
    }

    GetProductTypes(search: string): Observable<any> {
        let params = new HttpParams();

        if (search?.trim()) {
            params = params.set('search', search.trim());
        }
        return this.http.get(
            `${this.baseUrl}/Product/get-product-types`,
            { params }
        );
    }

    GetPublishingHouse(search: string, page: number): Observable<any> {
        let params = new HttpParams();

        if (search?.trim()) {
            params = params.set('search', search.trim());
        }

        params = params.set('page', page);
        return this.http.get(
            `${this.baseUrl}/Product/get-publishing-houses`,
            { params }
        );
    }

    DeleteProduct(productId: number): Observable<any> {
        return this.http.delete(
            `${this.baseUrl}/Product/delete-product/${productId}`
        );
    }



}