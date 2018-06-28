import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppService } from '../../../app.service';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.sass'],
  providers: [AppService]
})
export class ShowsComponent implements OnInit {

  form_shows: FormGroup;
  getData:  string;

  constructor(
    private formBuilder: FormBuilder,
    private httpAppService: AppService
  ) { }
  ngOnInit() {
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
   onShowsGet() {
    this.httpAppService.getShows()
    .subscribe(
      data => this.getData = JSON.stringify(data),
      error => alert(error),
      () => console.log('acesso a webapi get ok...')
   );
  }
  resetForm() {

    this.form_shows = this.formBuilder.group({

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
