import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../app.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';
import { Http } from '@angular/http';

@Component({
  selector: 'app-consult',
  templateUrl: './consult.component.html',
  styleUrls: ['./consult.component.sass'],
  providers: [AppService]
})
export class ConsultComponent implements OnInit {
  form_consult: FormGroup;
  getConsult: any;
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
  getShowsId() {
    return this.http.get(`https://desafia.sae.digital/api/shows/${this.getConsultId.number}`)
    .pipe(map(data => data.json()))
    .subscribe(
      data => this.getConsult = data,
      error => alert(error)
   );
  }
}
