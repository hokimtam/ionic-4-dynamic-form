import { Component, ElementRef, ViewChild } from "@angular/core";

@Component({
  selector: "app-form-builder",
  templateUrl: "./form-builder.page.html",
  styleUrls: ["./form-builder.page.scss"],
})
export class FormBuilderPage {
  @ViewChild("json", { static: false }) jsonElement?: ElementRef;

  public options: Object = require('./builder.options.json')

  public form: Object = require('./builder.form.json')

  onChange(event) {
    this.jsonElement.nativeElement.innerHTML = "";
    this.jsonElement.nativeElement.appendChild(
      document.createTextNode(JSON.stringify(event.form, null, 4))
    );
  }
}
