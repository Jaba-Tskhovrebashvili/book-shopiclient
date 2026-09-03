import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, inject } from '@angular/core';
import { SignInReq } from '../Models/sign-in-request.model';
import { UserServiceService } from '../Services/admin-service.service';
import { MessageService } from 'primeng/api';
import { CookieService } from 'ngx-cookie-service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-authorisation',
  standalone: false,
  styleUrl: './authorisation.scss',
  templateUrl: './authorisation.html',
})
export class Authorisation implements OnInit {
  signInForm: any;
  user!: SignInReq;
  isSpin: boolean = false;
  constructor(
    private fb: FormBuilder,
    private userServiceService: UserServiceService,
    private messageService: MessageService,
    private cookieService: CookieService,
    private router: Router) { }
  ngOnInit(): any {
    this.signInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()_+=-]).{8,16}$'
          ),
        ],
      ],
    });
  }


  SignIn() {
    this.isSpin = true;
    this.user = {
      email: this.signInForm.get("email")?.value,
      password: this.signInForm.get("password")?.value
    }

    this.userServiceService.SignIn(this.user).subscribe({
      next: (response: any) => {

        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: response.message,
        });
        this.cookieService.set('role', 'admin')
        this.cookieService.set('token', response.token);
        this.cookieService.set('userId', response.admin.id);
        this.userServiceService.myUser = {
          id: response.admin.id,
          name: response.admin.name,
          surname: response.admin.surname,
          email: response.admin.email
        }
        this.isSpin = false;
        this.router.navigate(["/home"]);
      },
      error: (err) => {

        this.isSpin = false;
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: err.error.message,
        });

      }
    })
  }
}
