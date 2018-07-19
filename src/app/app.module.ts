import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import 'hammerjs';

import { AppComponent } from './app.component';
import { MaterialComponentsModule } from './_app-modules/material-components.module';
import { NavbarComponent } from './_components/navbar/navbar.component';
import { RoutingModule } from './_app-modules/routing.module';
import { UvfService } from './_services/uvf.service';
import { HttpClientModule } from '../../node_modules/@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialComponentsModule,
    RoutingModule,
    HttpClientModule,
  ],
  providers: [
    UvfService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
