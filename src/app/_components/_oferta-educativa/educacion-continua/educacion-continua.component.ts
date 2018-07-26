import { Component, OnInit, OnDestroy } from '@angular/core';
import { UvfService } from '../../../_services/uvf.service';

@Component({
  selector: 'app-educacion-continua',
  templateUrl: './educacion-continua.component.html',
  styleUrls: ['./educacion-continua.component.css']
})
export class EducacionContinuaComponent implements OnInit, OnDestroy {

  constructor(public _uvfService: UvfService) { }

  ngOnInit() {
    this._uvfService.setOEInkBarActive(true);
  }

  ngOnDestroy() {
    this._uvfService.setOEInkBarActive(false);
  }

}
