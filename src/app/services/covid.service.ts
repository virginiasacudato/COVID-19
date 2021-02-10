import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  constructor(private _http: HttpClient) { }

  covidApi(){
    const urlApi = 'https://coronavirus-tracker-api.herokuapp.com/v2/locations/6'; // URL a API
    return this._http.get(urlApi).pipe(map((response: any) => response)); //Recorro datos con map y los muestro en consola
  }
}
