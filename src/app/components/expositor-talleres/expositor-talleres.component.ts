import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Expositor } from '../../classes/expositor';
import { TipoExposicion } from '../../classes/tipo-exposicion';
import { Exposicion } from '../../classes/exposicion';

@Component({
  selector: 'app-expositor-talleres',
  templateUrl: './expositor-talleres.component.html',
  styleUrls: ['./expositor-talleres.component.css']
})
export class ExpositorTalleresComponent implements OnInit {
  @Input() expositorSelected:Expositor;
  @Output() onAddExposicion = new EventEmitter<any>();

  options:Object = {
    toolbarButtons: ['bold','italic', 'underline','insertLink','fontFamily']
  }

  exposicion:Exposicion = new Exposicion();
  addExposicionForm: FormGroup;
  formDataValue: {};

  constructor(private fb:FormBuilder) { 
    this.addExposicionForm = fb.group({
      'name': [null, Validators.compose([Validators.required, Validators.minLength(8)])],
      'description': null,
      'exposureDate': [null, Validators.required],
      'exposureAt': [null, Validators.required],
      'tipoExposicion': 'Conferencia'

    })
  }

  addExposicion(formValue:any) {
    let _expo:Exposicion = new Exposicion();
    _expo.name = formValue.name;
    _expo.description = formValue.description;
    _expo.exposureDate = formValue.exposureDate;
    _expo.exposureAt = formValue.exposureAt;
    _expo.tipoExposicion = new TipoExposicion(formValue.tipoExposicion);
    //this.formDataValue = formValue;    
    this.onAddExposicion.emit(_expo);
    
  }

  ngOnInit() {
  }

}
