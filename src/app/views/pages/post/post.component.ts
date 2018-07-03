import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../app.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.sass'],
  providers: [AppService]
})
export class PostComponent implements OnInit {
  form_post: FormGroup;
  postData: string;
  constructor(
    private formBuilder: FormBuilder,
    private httpAppService: AppService,
    private http: Http
  ) { }

  ngOnInit() {
  }
  onSubmit() {
    this.http.post('https://desafia.sae.digital/api/shows/', JSON.stringify(this.form_post))
    .pipe(map(data => data.json()))
    .subscribe(
      data => this.postData = data
    );
  }
  resetForm() {
    this.form_post = this.formBuilder.group({
      number: [''],
      name: [''],
      description: [''],
      date: [''],
      armchairs_qtd: [''],
      status: [''],
      cost: ['']
      });
  }
}
