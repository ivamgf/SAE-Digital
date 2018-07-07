import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppService } from '../../../app.service';


@Component({
  selector: 'app-armchairs',
  templateUrl: './armchairs.component.html',
  styleUrls: ['./armchairs.component.sass'],
  providers: [AppService]
})
export class ArmchairsComponent implements OnInit {

  form_armchairs: FormGroup;
  getArmchairs:  string;
  results: any;

  constructor(
    private formBuilder: FormBuilder,
    private httpAppService: AppService
  ) { }

  ngOnInit() {
    const returnArmchairs = this.httpAppService.getArmchairs()
    .subscribe(
      data => this.getArmchairs = data,
      error => alert(error)
   );
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
  onArmchairsGetId() {
    this.httpAppService.getArmchairsId()
    .subscribe(
      data => this.getArmchairs = JSON.stringify(data),
      error => alert(error),
      () => console.log('acesso a webapi get ok...')
   );
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
