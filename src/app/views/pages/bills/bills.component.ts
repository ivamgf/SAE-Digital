import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppService } from '../../../app.service';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.sass'],
  providers: [AppService]
})
export class BillsComponent implements OnInit {

  form_bills: FormGroup;
  getBills:  string;
  results: any;

  constructor(
    private formBuilder: FormBuilder,
    private httpAppService: AppService
  ) { }

  ngOnInit() {
    const returnBills = this.httpAppService.getBills()
    .subscribe(
      data => this.getBills = data,
      error => alert(error)
   );

    this.form_bills = this.formBuilder.group({

      cod_id: ['', [Validators.required, Validators.nullValidator]],
      number: ['', [Validators.required, Validators.nullValidator]],
      name: ['', [Validators.required, Validators.nullValidator]],
      description: ['', [Validators.required, Validators.nullValidator]],
      date: ['', [Validators.required, Validators.nullValidator]],
      armchairs_qtd: ['', [Validators.required, Validators.nullValidator]],
      status: ['', [Validators.required, Validators.nullValidator]],
      cost: ['', [Validators.required, Validators.nullValidator]],
      total: ['', [Validators.required, Validators.nullValidator]]

    });
  }
  onBillsGetId() {
    this.httpAppService.getBillsId()
    .subscribe(
      data => this.getBills = JSON.stringify(data),
      error => alert(error),
      () => console.log('acesso a webapi get ok...')
   );
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
