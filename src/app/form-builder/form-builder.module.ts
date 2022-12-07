import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { FormBuilderPageRoutingModule } from "./form-builder-routing.module";

import { FormBuilderPage } from "./form-builder.page";
import { Formio, FormioModule } from "angular-formio";
import { Formio as FJ} from "formiojs"
import FormioContrib from "fomiojs-component-customized";

Formio.use(FormioContrib);
FJ.use(FormioContrib);

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormBuilderPageRoutingModule,
    FormioModule,
  ],
  declarations: [FormBuilderPage],
})
export class FormBuilderPageModule {}
