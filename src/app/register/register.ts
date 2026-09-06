import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserServiceService } from '../Services/admin-service.service';
import { PasswordReq } from "../Models/password-request.model"
import { MessageService } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: false,
  styleUrl: './register.scss',
  templateUrl: './register.html',
})
export class Register implements OnInit {
  SignUpForm: any;
  passwordReq!: PasswordReq;
  route = inject(ActivatedRoute);
  token: string | null = null;
  isSpin: boolean = false;
  constructor(private fb: FormBuilder,
    private userServiceService: UserServiceService,
    private messageService: MessageService,
    private router: Router) {

  }

  ngOnInit(): any {
    this.SignUpForm = this.fb.group({
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()_+=-]).{8,16}$'
          ),
        ],
      ],
      confirmPassword: [
        '',
        [
          Validators.required
        ],
      ]
    });

    this.token = this.route.snapshot.queryParamMap.get('token');

  }


  AdminRegister() {
    this.isSpin = true;
    this.passwordReq = {
      password: this.SignUpForm.get("password")?.value,
      confirmPassword: this.SignUpForm.get("confirmPassword")?.value
    }

    this.userServiceService.Register(this.passwordReq, String(this.token)).subscribe({
      next: (response) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: response.message,
        });

        this.SignUpForm.get("password")?.setValue("");
        this.SignUpForm.get("confirmPassword")?.setValue("");
        this.isSpin = false;
        this.router.navigate(["/sign-in"]);
      },
      error: (err) => {
        console.log("error", err)
        this.isSpin = false;
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: err.error.message,
        });

      },
    })
  }

}
