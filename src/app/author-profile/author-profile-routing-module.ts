import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorProfile } from './author-profile';

const routes: Routes = [{
  path: "",
  component: AuthorProfile
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthorProfileRoutingModule { }
