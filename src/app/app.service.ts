import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  public count: number;
 constructor(
    private http: Http
  )   { }
    getShows() {
    return this.http.get('https://desafia.sae.digital/api/shows/')
    .pipe(map(data => data.json()));
  }
    getBills() {
    return this.http.get('https://desafia.sae.digital/api/bills/')
    .pipe(map(data => data.json()));
  }
    getBillsId() {
    return this.http.get('https://desafia.sae.digital/api/bills/{id}/')
    .pipe(map(data => data.json()));
  }
    getArmchairs() {
    return this.http.get('https://desafia.sae.digital/api/armchairs/')
    .pipe(map(data => data.json()));
  }
    getArmchairsId(): Observable<Response[]> {
    return this.http.get('https://desafia.sae.digital/api/armchairs/{id}/')
    .pipe(map(data => data.json()));
  }
}
