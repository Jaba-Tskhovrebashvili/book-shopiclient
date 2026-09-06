import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './guards/auth-guard.guard';
import { HomeGuardGuard } from './guards/home-guard.guard';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home-module').then((m) => m.HomeModule), canActivate: [AuthGuardGuard] },
  { path: "email-verify", loadChildren: () => import("./email-verify/email-verify-module").then((m) => m.EmailVerifyModule), canActivate: [HomeGuardGuard] },
  { path: "sign-up", loadChildren: () => import("./register/register-module").then((m) => m.RegisterModule), canActivate: [HomeGuardGuard] },
  { path: "sign-in", loadChildren: () => import("./authorisation/authorisation-module").then((m) => m.AuthorisationModule), canActivate: [HomeGuardGuard] },
  { path: "author-profile/:id", loadChildren: () => import("./author-profile/author-profile-module").then((m) => m.AuthorProfileModule), canActivate: [AuthGuardGuard] },
  { path: "products", loadChildren: () => import('./product/product-module').then((m) => m.ProductModule), canActivate: [AuthGuardGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
