import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.sass']
})
export class BillsComponent implements OnInit {

  form_bills: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {

    this.form_bills = this.formBuilder.group({

      cod_id: ['1', [Validators.required, Validators.nullValidator]],
      number: ['1', [Validators.required, Validators.nullValidator]],
      name: ['armchairs 1', [Validators.required, Validators.nullValidator]],
      description: ['armchairs 1', [Validators.required, Validators.nullValidator]],
      date: ['2018-06-27', [Validators.required, Validators.nullValidator]],
      armchairs_qtd: ['2', [Validators.required, Validators.nullValidator]],
      status: ['active', [Validators.required, Validators.nullValidator]],
      cost: ['23.45', [Validators.required, Validators.nullValidator]],
      total: ['46.90', [Validators.required, Validators.nullValidator]]

    });
  }
  resetForm() {

    this.form_bills = this.formBuilder.group({
      cod_id: [''],
      number: [''],
      name: [''],
      description: [''],
      date: [''],
      armchairs_qtd: [''],
      status: [''],
      cost: [''],
      total: ['']
      });
    }
}
