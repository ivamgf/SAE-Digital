import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { AppService } from '../../../app.service';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.sass'],
  providers: [AppService]
})
export class ShowsComponent implements OnInit {
  number = new FormControl();
  results: any;
  date = new FormControl();
  armchairs_qtd = new FormControl();
  status = new FormControl();
  cost = new FormControl();
  form_shows: FormGroup;
  getData:  string;
  postData:  string;
  constructor(
    private formBuilder: FormBuilder,
    private httpAppService: AppService,
    private http: Http
  ) { }
  ngOnInit() {
  const returnShows = this.httpAppService.getShows()
  .subscribe(
      data => this.getData = data,
      error => alert(error)
   );
   this.form_shows = this.formBuilder.group({

      number: ['', [Validators.required, Validators.nullValidator]],
      name: ['', [Validators.required, Validators.nullValidator]],
      description: ['', [Validators.required, Validators.nullValidator]],
      date: ['', [Validators.required, Validators.nullValidator]],
      armchairs_qtd: ['', [Validators.required, Validators.nullValidator]],
      status: ['', [Validators.required, Validators.nullValidator]],
      cost: ['', [Validators.required, Validators.nullValidator]]

    });
  }
}
