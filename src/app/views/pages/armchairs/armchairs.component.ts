import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-armchairs',
  templateUrl: './armchairs.component.html',
  styleUrls: ['./armchairs.component.sass']
})
export class ArmchairsComponent implements OnInit {

  form_armchairs: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.form_armchairs = this.formBuilder.group({

      cod_id: ['', [Validators.required, Validators.nullValidator]],
      number: ['', [Validators.required, Validators.nullValidator]],
      name: ['', [Validators.required, Validators.nullValidator]],
      description: ['', [Validators.required, Validators.nullValidator]],
      date: ['', [Validators.required, Validators.nullValidator]],
      armchairs_qtd: ['', [Validators.required, Validators.nullValidator]],
      status: ['', [Validators.required, Validators.nullValidator]],
      cost: ['', [Validators.required, Validators.nullValidator]],
      reservation: ['', [Validators.required, Validators.nullValidator]],
      status_armchairs: ['', [Validators.required, Validators.nullValidator]]

    });
  }
  resetForm() {

    this.form_armchairs = this.formBuilder.group({
      cod_id: [''],
      number: [''],
      name: [''],
      description: [''],
      date: [''],
      armchairs_qtd: [''],
      status: [''],
      cost: [''],
      reservation: [''],
      status_armchairs: ['']
      });
    }

}
