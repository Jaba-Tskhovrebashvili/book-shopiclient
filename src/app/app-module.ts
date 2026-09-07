import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';

import { authorisationInterceptor } from './authorisation.interceptor';

import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { providePrimeNG } from 'primeng/config';
import Lara from '@primeuix/themes/lara';
import { environment } from './environments/environment';



@NgModule({
  declarations: [App],

  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule],

  providers: [
    provideBrowserGlobalErrorListeners(),

    provideHttpClient(withInterceptors([authorisationInterceptor])),

    providePrimeNG({
      theme: {
        preset: Lara,
      },
      license:
        environment.PrimeNgLicense
    }),
  ],

  bootstrap: [App],
})
export class AppModule { }
