import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable, of } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { VerifyRequest } from '../Models/verify-request.model';
import { PasswordReq } from '../Models/password-request.model'
@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  private baseUrl = environment.apiUrl;
  constructor(private http: HttpClient, private cookieService: CookieService) { }
  myUser: any = {};
  EmailVerify(Data: VerifyRequest): Observable<any> {

    return this.http.post(
      `${this.baseUrl}/Auth/email-verify`, Data
    );
  }

  Register(Data: PasswordReq, token: string): Observable<any> {

    return this.http.post(
      `${this.baseUrl}/Auth/sign-up?token=${token}`, Data
    );
  }



}