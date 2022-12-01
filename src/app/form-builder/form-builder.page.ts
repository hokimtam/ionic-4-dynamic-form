import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.page.html',
  styleUrls: ['./form-builder.page.scss'],
})
export class FormBuilderPage {
  @ViewChild('json',{static: false}) jsonElement?: ElementRef;
  public form: Object = {
    components: []
  };

  onChange(event) {
    this.jsonElement.nativeElement.innerHTML = '';
    this.jsonElement.nativeElement.appendChild(document.createTextNode(JSON.stringify(event.form, null, 4)));
  }
}
