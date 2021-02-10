import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  url = 'https://api.covid19api.com/country/argentina/status/confirmed';
  constructor(private http: HttpClient) { } // Se inserta la clase HttpClient

  getdata(): Observable<any> {
    return this.http.get(this.url);
  }
    
}
