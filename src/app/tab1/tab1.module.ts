import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { FormioModule } from 'angular-formio';
import { Formio } from "formiojs"
import FormioContrib from "fomiojs-component-customized"

import { FORM_META } from './form-meta';


Formio.use(FormioContrib)
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormioModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab1Page }])
  ],
  
  declarations: [Tab1Page]
})
export class Tab1PageModule {
  constructor() {

    window.onload = function () {
      
      Formio.createForm(document.getElementById('formio'), FORM_META,
        {
          'noAlerts': true,
        }).then(function (form) {

          form.on('submit', function (submission) {
            console.log(submission);
          });
        });
    };

    // Formio
  }

  onSubmit(submission: any) {
    console.log(submission); // This will print out the full submission from Form.io API.
  }
}
