import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorisationRoutingModule } from './authorisation-routing-module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Authorisation } from './authorisation';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [Authorisation],
  imports: [CommonModule, AuthorisationRoutingModule, ReactiveFormsModule, FormsModule, RouterModule],
})
export class AuthorisationModule { }
