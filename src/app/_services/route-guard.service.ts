import { Injectable } from '@angular/core';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '../../../node_modules/@angular/router';
import { Observable } from '../../../node_modules/rxjs';
import { UvfService } from './uvf.service';
import { take, map } from '../../../node_modules/rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate, CanActivateChild {

  constructor(private _uvfService: UvfService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    this.getData(state.url);
    return true;
  }


  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    console.log(childRoute);
    return true;
  }

  getData(url: string) {
    if (url == '/oferta-educativa/licenciaturas') {
      if (!this._uvfService.licenciaturasData) {
        this._uvfService.getLicenciaturasData().pipe(
          take(1),
          map((data:any) => {
            return data.body;
          })
        ).subscribe((data) => {
          this._uvfService.setLicenciaturasData(data);
          this._uvfService.setHeaders(data.headers, data.links);
        });
      } else {
        this._uvfService.setHeaders(this._uvfService.licenciaturasData.headers, this._uvfService.licenciaturasData.links);
      }
    } else {
      if (!this._uvfService.posgradosData) {
        this._uvfService.getPosgradosData().pipe(
          take(1),
          map((data:any) => {
            return data.body;
          })
        ).subscribe((data:any) => {
          this._uvfService.setPosgradosData(data);
          this._uvfService.setHeaders(data.headers, data.links);
        });
      } else {
        this._uvfService.setHeaders(this._uvfService.posgradosData.headers, this._uvfService.posgradosData.links);
      }
    }
  }

}
