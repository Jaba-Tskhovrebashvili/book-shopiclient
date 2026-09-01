import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing-module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Register } from './register';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { MessageService } from 'primeng/api';
import { RouterModule } from '@angular/router';
import { ProgressSpinnerModule } from 'primeng/progressspinner';


@NgModule({
  declarations: [Register],
  imports: [CommonModule,
    RegisterRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ToastModule,
    ButtonModule,
    RippleModule,
    RouterModule,
    ProgressSpinnerModule],
  providers: [MessageService]
})
export class RegisterModule { }
