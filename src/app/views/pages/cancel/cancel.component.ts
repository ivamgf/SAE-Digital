import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../app.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cancel',
  templateUrl: './cancel.component.html',
  styleUrls: ['./cancel.component.sass'],
  providers: [AppService]
})
export class CancelComponent implements OnInit {
  form_cancel: FormGroup;
  getCancel:  string;
  arrowCancel: string[] = [''];
  constructor(
    private formBuilder: FormBuilder,
    private httpAppService: AppService
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

}
