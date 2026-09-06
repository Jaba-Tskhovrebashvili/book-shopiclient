import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';

import { authorisationInterceptor } from './authorisation.interceptor';

import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { providePrimeNG } from 'primeng/config';
import Lara from '@primeuix/themes/lara';


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
        'eyJpZCI6IjRmZWFmMDBhLWQ0ZjItNDA5Ny05Mjk1LWFkOWY3MTI3MGQ0MSIsInByb2R1Y3QiOiJwcmltZXVpIiwidGllciI6ImNvbW11bml0eSIsInR5cGUiOiJkZXYiLCJpYXQiOjE3ODgyNTAwMzIsImV4cCI6MTgxOTc4NjAzMn0.EHvM2DXs_G5tmskN8i2tjGH7blNdfu_fXY9tv_ONiOc1vzsLSE4fxyUmdJHOasFnhG6aVJWHZ78dhUaSYs0rAw',
    }),
  ],

  bootstrap: [App],
})
export class AppModule {}
