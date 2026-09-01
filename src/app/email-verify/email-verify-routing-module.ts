import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailVerify } from './email-verify';


const routes: Routes = [
  {path: "",component: EmailVerify}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmailVerifyRoutingModule {}
