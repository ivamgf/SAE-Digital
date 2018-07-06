import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../app.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RequestOptions, Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { contentHeaders } from '../post/post.component';

@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.sass'],
  providers: [AppService]
})
export class ReserveComponent implements OnInit {
  form_reserve: FormGroup;
  getReserve:  any;
  arrowReserve: string[] = [''];
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
    const returnReserve = this.httpAppService.getShows()
    .subscribe(
      data => this.getReserve = data,
      error => alert(error)
   );
  }
  onReserve() {
    const options = new RequestOptions({headers: contentHeaders});
    return this.http.post(`https://desafia.sae.digital/api/armchairs/${this.getConsultId.number}`, this.getReserve, options)
    .pipe(map((response: Response) => response.json()))
    .subscribe(
      data => this.getReserve = data,
      () => console.log(this.getReserve)
    );
  }
}
