import { Component, OnInit, OnDestroy } from '@angular/core';
import { UvfService } from '../../../_services/uvf.service';

@Component({
  selector: 'app-innovagain',
  templateUrl: './innovagain.component.html',
  styleUrls: ['./innovagain.component.css']
})
export class InnovagainComponent implements OnInit, OnDestroy {

  constructor(public _uvfService: UvfService) { }

  ngOnInit() {
    this._uvfService.setRUInkBarActive(true);
  }

  ngOnDestroy() {
    this._uvfService.setRUInkBarActive(false);
  }

}
