import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../app.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';
import { Http, RequestOptions } from '@angular/http';
import { Headers } from '@angular/http';

export const contentHeaders = new Headers();
contentHeaders.append('Accept', 'application/json');
contentHeaders.append('Content-Type', 'application/json');
contentHeaders.append('Access-Control-Allow-Origin', '*');
@Component({
  selector: 'app-consult',
  templateUrl: './consult.component.html',
  styleUrls: ['./consult.component.sass'],
  providers: [AppService]
})
export class ConsultComponent implements OnInit {
  form_consult: FormGroup;
  getConsult: any;
  putConsult: any = {
    name: '',
    description: '',
    date: '',
    armchairs_qtd: '',
    status: ''
  };
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
  onPut() {
    const options = new RequestOptions({headers: contentHeaders});
    return this.http.put(`https://desafia.sae.digital/api/shows/${this.getConsultId.number}`, this.getConsult, options)
    .pipe(map(data => data.json()))
    .subscribe(
      data => this.getConsult = data,
      () => console.log(this.getConsult)
    );
  }
  onDelete() {
    const options = new RequestOptions({headers: contentHeaders});
    return this.http.delete(`https://desafia.sae.digital/api/shows/${this.getConsultId.number}`, options)
    .pipe(map(data => data.json()))
    .subscribe(
      data => this.getConsult = data,
      () => console.log(this.getConsult)
    );
  }
}
