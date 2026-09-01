import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Authorisation } from './authorisation';

const routes: Routes = [
  {path: "", component: Authorisation}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthorisationRoutingModule {}
