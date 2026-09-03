import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../Services/admin-service.service';
import { CookieService } from 'ngx-cookie-service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  styleUrl: './header.scss',
  templateUrl: './header.html',
})
export class Header implements OnInit {

  constructor(public userServiceService: UserServiceService, 
    private cookieService: CookieService, 
    private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    const userId = this.cookieService.get("userId");

    this.userServiceService.GetProfile(Number(userId)).subscribe({
      next: (response) => {
        this.userServiceService.myUser = response.profile;
        this.cdr.detectChanges();

      },
      error: (error) => {
        console.error('PROFILE ERROR:', error);
      }
    });

  }

  AdminLogout() {
    this.userServiceService.Logout();
  }

}
