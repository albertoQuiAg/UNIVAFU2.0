import { Injectable } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UvfService {

  public noticiasData: any;;

  constructor(public _http: HttpClient) { }

  loadNoticiasData() {
    return this._http.get('assets/data/noticias.json', {observe: 'response'});
  }
}
