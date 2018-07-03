import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../app.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
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
    this.form_post = this.formBuilder.group({

      number: ['', [Validators.required, Validators.nullValidator]],
      name: ['', [Validators.required, Validators.nullValidator]],
      description: ['', [Validators.required, Validators.nullValidator]],
      date: ['', [Validators.required, Validators.nullValidator]],
      armchairs_qtd: ['', [Validators.required, Validators.nullValidator]],
      status: ['', [Validators.required, Validators.nullValidator]],
      cost: ['', [Validators.required, Validators.nullValidator]]

    });
  }
  onSubmit() {
    return this.http.post('https://desafia.sae.digital/api/shows/', JSON.stringify(this.form_post))
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
