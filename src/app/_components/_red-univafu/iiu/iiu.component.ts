import { Component, OnInit, OnDestroy } from '@angular/core';
import { UvfService } from '../../../_services/uvf.service';

@Component({
  selector: 'app-iiu',
  templateUrl: './iiu.component.html',
  styleUrls: ['./iiu.component.css']
})
export class IiuComponent implements OnInit, OnDestroy {

  constructor(public _uvfService: UvfService) { }

  ngOnInit() {
    this._uvfService.setRUInkBarActive(true);
  }

  ngOnDestroy() {
    this._uvfService.setRUInkBarActive(false);
  }

}
