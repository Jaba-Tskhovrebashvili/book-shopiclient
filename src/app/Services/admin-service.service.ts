import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable, of } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { VerifyRequest } from '../Models/verify-request.model';
import { PasswordReq } from '../Models/password-request.model';
import { User } from '../Models/user.model';
import { SignInReq } from '../Models/sign-in-request.model'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  private baseUrl = environment.apiUrl;
  constructor(private http: HttpClient,
    private cookieService: CookieService,
    private router: Router) { }
  myUser: User = {} as User;

  GetProfile(myId: number): Observable<any> {
    return this.http.get(
      `${this.baseUrl}/Auth/my-profile/${myId}`
    );
  }

  Logout() {
    this.cookieService.deleteAll();
    this.router.navigate(['/sign-in'])
  }

  EmailVerify(Data: VerifyRequest): Observable<any> {
    return this.http.post(
      `${this.baseUrl}/Auth/email-verify`, Data
    );
  }

  SignIn(Data: SignInReq) {
    return this.http.post(
      `${this.baseUrl}/Auth/sign-in`, Data
    );
  }

  Register(Data: PasswordReq, token: string): Observable<any> {
    return this.http.post(
      `${this.baseUrl}/Auth/sign-up?token=${token}`, Data
    );
  }



}