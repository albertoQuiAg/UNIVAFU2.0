import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgramasRoutingModule } from './programas-routing.module';
import { ProgramasComponent } from './programas.component';

@NgModule({
  imports: [
    CommonModule,
    ProgramasRoutingModule
  ],
  declarations: [
    ProgramasComponent
  ]
})
export class ProgramasModule { }
