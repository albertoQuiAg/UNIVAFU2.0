import { Component, OnInit, OnDestroy } from '@angular/core';
import { UvfService } from '../../../_services/uvf.service';

@Component({
  selector: 'app-fundacion',
  templateUrl: './fundacion.component.html',
  styleUrls: ['./fundacion.component.css']
})
export class FundacionComponent implements OnInit, OnDestroy {

  constructor(public _uvfService: UvfService) { }

  ngOnInit() {
    this._uvfService.setRUInkBarActive(true);
  }

  ngOnDestroy() {
    this._uvfService.setRUInkBarActive(false);
  }

}
