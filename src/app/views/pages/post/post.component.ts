import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../app.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Http, RequestOptions } from '@angular/http';
import { map } from 'rxjs/operators';
import {Headers} from '@angular/http';

export const contentHeaders = new Headers();
contentHeaders.append('Accept', 'application/json, text/plain, */*');
contentHeaders.append('Content-Type', 'application/json');
contentHeaders.append('Access-Control-Allow-Origin', '*');

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.sass'],
  providers: [AppService]
})
export class PostComponent implements OnInit {
  form_post: FormGroup;
  postData: string;
  postArmchairs: any = {
    number: '',
    name: '',
    description: '',
    date: '',
    armchairs_qtd: '',
    status: ''
  };

  constructor(
    private formBuilder: FormBuilder,
    private httpAppService: AppService,
    private http: Http
  ) { }

  ngOnInit() {
  }
  onSubmit() {
    this.httpAppService.registerNewShows(this.postArmchairs)
    .subscribe(
      data => this.postData = data.json()
    );
  }
}
