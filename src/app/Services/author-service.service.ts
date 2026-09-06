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


    GetAuthorProfile(authorId: string): Observable<any> {

        return this.http.get(
            `${this.baseUrl}/Author/get-author/${authorId}`,
        );
    }

    GetAuthorsProfile(search: string, cityId: number | null, countryId: number | null, sexId: number | null, page: number): Observable<any> {
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

    GetAuthorSelect(search: string, authorselect: string, page: number): Observable<any> {
        let params = new HttpParams();

        if (search?.trim()) {
            params = params.set('search', search.trim());
        }
        if (authorselect?.trim()) {
            params = params.set('authorselect', authorselect.trim());
        }
        params = params.set('page', page);

        return this.http.get(
            `${this.baseUrl}/Author/get-select-authors`,
            { params }
        );
    }

    AddAuthorFunct(data: any): Observable<any> {
        return this.http.post(
            `${this.baseUrl}/Author/add-author`,
            data
        );
    }

    EditAuthorProfile(data: any, id: number): Observable<any> {

        return this.http.put(
            `${this.baseUrl}/Author/edit-author/${id}`,
            data
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