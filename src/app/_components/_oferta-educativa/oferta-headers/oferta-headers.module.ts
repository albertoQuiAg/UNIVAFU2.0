import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OfertaHeadersRoutingModule } from './oferta-headers-routing.module';
import { MaterialComponentsModule } from '../../../_app-modules/material-components.module';
import { OfertaHeadersComponent } from './oferta-headers.component';

@NgModule({
  imports: [
    CommonModule,
    OfertaHeadersRoutingModule,
    MaterialComponentsModule
  ],
  declarations: [
    OfertaHeadersComponent
  ]
})
export class OfertaHeadersModule { }
