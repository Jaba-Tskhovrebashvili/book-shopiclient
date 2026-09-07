import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductProfile } from './product-profile';


const routes: Routes = [{
  path: "",
  component: ProductProfile
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductProfileRoutingModule { }
