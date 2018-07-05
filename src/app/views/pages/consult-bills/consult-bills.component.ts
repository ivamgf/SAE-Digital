import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../app.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { map } from 'rxjs/operators';
import { Http } from '@angular/http';

@Component({
  selector: 'app-consult-bills',
  templateUrl: './consult-bills.component.html',
  styleUrls: ['./consult-bills.component.sass'],
  providers: [AppService]
})
export class ConsultBillsComponent implements OnInit {
  form_consultBills: FormGroup;
  getConsultBills:  any;
  getConsultId: any = {
    armchairs_qtd: '',
    cost_of_armchair: '',
    date: '',
    description: '',
    id: '',
    name: '',
    status: ''
  };
  constructor(
    private formBuilder: FormBuilder,
    private httpAppService: AppService,
    private http: Http
  ) { }

  ngOnInit() {
  }
  onBillsGetId() {
    return this.http.get(`https://desafia.sae.digital/api/bills/${this.getConsultId.number}`)
    .pipe(map(data => data.json()))
    .subscribe(
      data => this.getConsultBills = data,
      error => alert(error),
      () => console.log(this.getConsultBills)
   );
  }
}
