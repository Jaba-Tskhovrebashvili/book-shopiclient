import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { VerifyRequest } from '../Models/verify-request.model';
import { UserServiceService } from '../Services/admin-service.service';
import { MessageService } from 'primeng/api';
import { Location } from '@angular/common';



@Component({
  selector: 'app-email-verify',
  standalone: false,
  styleUrl: './email-verify.scss',
  templateUrl: './email-verify.html',
})
export class EmailVerify implements OnInit {
  verifyForm: any;
  isSpin: boolean = false;
  private verifyReq!: VerifyRequest
  constructor(private fb: FormBuilder,
    private userServiceService: UserServiceService,
    private messageService: MessageService,
    private location: Location) { }
  ngOnInit(): any {
    this.verifyForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', [Validators.required, Validators.minLength(2)]],
      surname: ['', [Validators.required, Validators.minLength(2)]]
    });
  }

  EmailVerify() {
    this.isSpin = true;
    this.verifyReq = {
      name: this.verifyForm.get("name")?.value,
      surname: this.verifyForm.get("surname")?.value,
      email: this.verifyForm.get("email")?.value
    }
    this.userServiceService.EmailVerify(this.verifyReq).subscribe({
      next: (response) => {

        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: response.message,
        });

        this.verifyForm.get('name')?.setValue('');
        this.verifyForm.get('surname')?.setValue('');
        this.verifyForm.get('email')?.setValue('');
        this.isSpin = false;
        setTimeout(() => {
          this.location.historyGo(0);
        }, 4000);

      },
      error: (err) => {

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
