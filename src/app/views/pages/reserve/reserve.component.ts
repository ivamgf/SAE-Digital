import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../app.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.sass'],
  providers: [AppService]
})
export class ReserveComponent implements OnInit {
  form_reserve: FormGroup;
  getReserve:  string;
  arrowReserve: string[] = [''];
  constructor(
    private formBuilder: FormBuilder,
    private httpAppService: AppService
  ) { }

  ngOnInit() {
    const returnReserve = this.httpAppService.getShows()
    .subscribe(
      data => this.getReserve = data,
      error => alert(error)
   );
   this.form_reserve = this.formBuilder.group({

    name: ['', [Validators.required, Validators.nullValidator]],
    reservation_name: ['', [Validators.required, Validators.nullValidator]],
    status_armchairs: ['', [Validators.required, Validators.nullValidator]]

  });
  }

}
