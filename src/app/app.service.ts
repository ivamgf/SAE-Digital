import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

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
    getShowsId(): Observable<Response> {
    return this.http.get('https://desafia.sae.digital/api/shows/{id}/')
    .pipe(map(res => res.json()));
  }
    getBills(): Observable<Response> {
    return this.http.get('https://desafia.sae.digital/api/bills/')
    .pipe(map(res => res.json()));
  }
    getBillsId(): Observable<Response> {
    return this.http.get('https://desafia.sae.digital/api/bills/{id}/')
    .pipe(map(res => res.json()));
  }
    getArmchairs(): Observable<Response> {
    return this.http.get('https://desafia.sae.digital/api/armchairs/')
    .pipe(map(res => res.json()));
  }
    getArmchairsId(): Observable<Response> {
    return this.http.get('https://desafia.sae.digital/api/armchairs/{id}/')
    .pipe(map(res => res.json()));
  }
}
