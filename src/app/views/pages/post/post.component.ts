import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../app.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Http, RequestOptions } from '@angular/http';
import { map } from 'rxjs/operators';
import { Headers } from '@angular/http';
import { Observable } from 'rxjs';

export const contentHeaders = new Headers();
contentHeaders.append('Accept', 'application/json');
contentHeaders.append('Content-Type', 'application/json');
contentHeaders.append('Access-Control-Allow-Origin', '*');
contentHeaders.append('Access-Control-Allow-Credentials', 'true');
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
    const options = new RequestOptions({headers: contentHeaders});
    return this.http.post('https://desafia.sae.digital/api/shows/', this.postArmchairs, options)
    .pipe(map((response: Response) => response.json()))
    .subscribe(
      data => this.postArmchairs = data,
      () => console.log(this.postArmchairs)
    );
  }
}
