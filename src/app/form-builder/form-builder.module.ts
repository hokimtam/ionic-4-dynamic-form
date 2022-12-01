import { ElementRef, NgModule, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormBuilderPageRoutingModule } from './form-builder-routing.module';

import { FormBuilderPage } from './form-builder.page';
import { FormioModule } from 'angular-formio';
// import { FormBuilder, Formio } from 'formiojs';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormBuilderPageRoutingModule,
    FormioModule
    
  ],
  declarations: [FormBuilderPage]
})
export class FormBuilderPageModule {
  @ViewChild('json',{read: true, static:true}) jsonElement?: ElementRef;

  public form: Object = {
    components: []
  };
}
