import { Component, OnInit, ViewChild, Output, ElementRef } from '@angular/core';
import { FormioAppConfig } from 'angular-formio';

@Component({
  selector: 'app-formbuilder',
  templateUrl: './formbuilder.component.html',
  styleUrls: ['./formbuilder.component.scss']
})
export class FormbuilderComponent implements OnInit {
  formComponents: any;
  // @ViewChild('json') jsonElement?: ElementRef;
  // @Output()
  // formioEvent = new EventEmitter<FormioEvent>();
  public form: Object = {
    components: []
  };

  constructor(
    public config: FormioAppConfig,
  ) { }

  ngOnInit() {
  }

  onChange(event) {
    this.formComponents = event.form;
    console.log(this.formComponents);
  }

}
