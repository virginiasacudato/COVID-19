import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CovidService {

  constructor(private _http: HttpClient) {}

  covidApi(){
    const urlApi = environment.apiUrl; // URL a API
    return this._http.get(urlApi).pipe(map((response: any) => response)); //Recorro datos con map 
  }

}
