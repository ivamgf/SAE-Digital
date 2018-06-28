import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
// import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
// import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(
    private http: Http
  ) { }
    getShows(): Observable<Response> {
    return this.http.get('https://desafia.sae.digital/api/shows/')
    .pipe(map(res => res.json()));
  }
}
