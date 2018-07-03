import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../app.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-consult-bills',
  templateUrl: './consult-bills.component.html',
  styleUrls: ['./consult-bills.component.sass'],
  providers: [AppService]
})
export class ConsultBillsComponent implements OnInit {
  form_consultBills: FormGroup;
  getConsultBills:  string;
  constructor(
    private formBuilder: FormBuilder,
    private httpAppService: AppService
  ) { }

  ngOnInit() {
  }
  onBillsGetId(id) {
    this.httpAppService.getBillsId()
    .subscribe(
      data => this.getConsultBills = data,
      error => alert(error)
   );
  }
}
