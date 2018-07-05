import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../app.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RequestOptions, Http } from '@angular/http';
import { contentHeaders } from '../post/post.component';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-cancel',
  templateUrl: './cancel.component.html',
  styleUrls: ['./cancel.component.sass'],
  providers: [AppService]
})
export class CancelComponent implements OnInit {
  form_cancel: FormGroup;
  getCancel:  any;
  arrowCancel: string[] = [''];
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
    const returnCancel = this.httpAppService.getShows()
    .subscribe(
      data => this.getCancel = data,
      error => alert(error)
   );
   this.form_cancel = this.formBuilder.group({

    name: ['', [Validators.required, Validators.nullValidator]],
    reservation_name: ['', [Validators.required, Validators.nullValidator]],
    status_armchairs: ['', [Validators.required, Validators.nullValidator]]

  });
  }
  onCancelReserve() {
    const options = new RequestOptions({headers: contentHeaders});
    return this.http.post(`https://desafia.sae.digital/api/armchairs/${this.getConsultId.number}`, this.getCancel, options)
    .pipe(map((response: Response) => response.json()))
    .subscribe(
      data => this.getCancel = data,
      () => console.log(this.getCancel)
    );
  }
}
