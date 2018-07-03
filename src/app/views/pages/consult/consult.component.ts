import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../app.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Http } from '@angular/http';

@Component({
  selector: 'app-consult',
  templateUrl: './consult.component.html',
  styleUrls: ['./consult.component.sass'],
  providers: [AppService]
})
export class ConsultComponent implements OnInit {
  form_consult: FormGroup;
  getConsult: string;
  constructor(
    private formBuilder: FormBuilder,
    private httpAppService: AppService,
    private http: Http
  ) { }

  ngOnInit() {

  }
  onShowsGetId() {
  const returnShows = this.httpAppService.getShowsId()
  .subscribe(
      data => this.getConsult = data,
      error => alert(error)
   );
  }
}
