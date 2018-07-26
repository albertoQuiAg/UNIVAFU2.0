import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OfertaHeadersComponent } from './oferta-headers.component';
import { RouteGuardService } from '../../../_services/route-guard.service';

const routes: Routes = [
  {
    path: '', component: OfertaHeadersComponent, canActivate: [RouteGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OfertaHeadersRoutingModule { }
