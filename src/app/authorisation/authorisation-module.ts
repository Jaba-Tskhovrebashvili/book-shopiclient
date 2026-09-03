import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorisationRoutingModule } from './authorisation-routing-module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Authorisation } from './authorisation';
import { RouterModule } from '@angular/router';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ProgressSpinnerModule } from 'primeng/progressspinner';


@NgModule({
  declarations: [Authorisation],
  imports: [CommonModule,
    AuthorisationRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    ProgressSpinnerModule,
    ToastModule
  ],
  providers: [MessageService]
})
export class AuthorisationModule { }
