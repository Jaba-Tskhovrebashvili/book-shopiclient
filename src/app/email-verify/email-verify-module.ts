import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmailVerifyRoutingModule } from './email-verify-routing-module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EmailVerify } from './email-verify';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { MessageService } from 'primeng/api';
import { RouterModule } from '@angular/router';
import { ProgressSpinnerModule } from 'primeng/progressspinner';



@NgModule({
  declarations: [EmailVerify],
  imports: [CommonModule,
    EmailVerifyRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ToastModule,
    ButtonModule,
    RippleModule,
    RouterModule,
    ProgressSpinnerModule],
  providers: [MessageService]
})
export class EmailVerifyModule { }
