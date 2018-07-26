import { Component, OnInit, OnDestroy } from '@angular/core';
import { UvfService } from '../../../_services/uvf.service';


@Component({
  selector: 'app-oferta-headers',
  templateUrl: './oferta-headers.component.html',
  styleUrls: ['./oferta-headers.component.css']
})
export class OfertaHeadersComponent implements OnInit, OnDestroy {

  constructor(public _uvfService: UvfService) { }

  ngOnInit() {
    this._uvfService.setOEInkBarActive(true);
  }

  ngOnDestroy() {
    this._uvfService.setOEInkBarActive(false);
  }

}
