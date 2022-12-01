import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormBuilderPage } from './form-builder.page';

const routes: Routes = [
  {
    path: '',
    component: FormBuilderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormBuilderPageRoutingModule {}
