import { Injectable } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { MatSidenav, MatToolbar } from '../../../node_modules/@angular/material';
import { MediaMatcher } from '../../../node_modules/@angular/cdk/layout';


@Injectable({
  providedIn: 'root'
})
export class UvfService {

  public noticiasData: any;
  public sidenav: MatSidenav;
  public toolbar: MatToolbar;
  public OEInkBarActive: boolean = false;
  public RUInkBarActive: boolean = false;
  mobileQuery: MediaQueryList;

  constructor(public _http: HttpClient, _media: MediaMatcher) { 
    this.mobileQuery = _media.matchMedia('(min-width: 900px)');
  }

  loadNoticiasData() {
    return this._http.get('assets/data/noticias.json', { observe: 'response' });
  }

  public setNavside(sidenav: MatSidenav) {
    this.sidenav = sidenav;
  }

  public setToolbar(toolbar: MatToolbar) {
    this.toolbar = toolbar;
  }

  setOEInkBar(state: boolean) {
    this.OEInkBarActive = state;
  }

  setRUInkBarActive(state: boolean) {
    this.RUInkBarActive = state;
  }

}
