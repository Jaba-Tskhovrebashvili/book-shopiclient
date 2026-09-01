import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
@Injectable({
  providedIn: 'root',
})
export class AuthGuardGuard implements CanActivate {
  constructor(private router: Router, private cookieService: CookieService) { }
  canActivate(route: ActivatedRouteSnapshot): boolean {
    let userRole: string | null = null;
    let userToken: string | null = null;

    userRole = this.cookieService.get('role');
    userToken = this.cookieService.get('token');

    if (userRole == 'admin' && userToken != null) {
      return true;
    } else {
      this.router.navigate(['/sign-in']);
      return false;
    }
  }
}
