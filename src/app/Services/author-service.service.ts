import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';


@Injectable({
    providedIn: 'root',
})
export class AuthorServiceService {
    private baseUrl = environment.apiUrl;
    constructor(private http: HttpClient,
    ) { }


    GetAuthorsProfile(search: string, cityId: number, countryId: number, sexId: number, page: number): Observable<any> {
        let params = new HttpParams();

        if (search?.trim()) {
            params = params.set('search', search.trim());
        }

        if (cityId !== null && cityId !== undefined) {
            params = params.set('cityId', cityId);
        }

        if (countryId !== null && countryId !== undefined) {
            params = params.set('countryId', countryId);
        }

        if (sexId !== null && sexId !== undefined) {
            params = params.set('sexId', sexId);
        }

        params = params.set('page', page);

        return this.http.get(
            `${this.baseUrl}/Author/get-authors`,
            { params }
        );
    }

    GetCountries(search: string, page: number): Observable<any> {
        let params = new HttpParams();

        if (search?.trim()) {
            params = params.set('search', search.trim());
        }

        params = params.set('page', page);

        return this.http.get(
            `${this.baseUrl}/Author/get-countries`,
            { params }
        );
    }

    DeleteAuthor(authorId: number): Observable<any> {


        return this.http.delete(
            `${this.baseUrl}/Author/delete-author/${authorId}`
        );
    }

    GetCities(search: string, page: number): Observable<any> {
        let params = new HttpParams();

        if (search?.trim()) {
            params = params.set('search', search.trim());
        }

        params = params.set('page', page);

        return this.http.get(
            `${this.baseUrl}/Author/get-cities`,
            { params }
        );
    }

    GetAuthorSex(): Observable<any> {

        return this.http.get(
            `${this.baseUrl}/Author/author-sex`
        );
    }


}