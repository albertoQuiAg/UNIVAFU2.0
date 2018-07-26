import { Component, OnInit } from '@angular/core';
import { UvfService } from '../../../_services/uvf.service';

@Component({
  selector: 'app-iridh',
  templateUrl: './iridh.component.html',
  styleUrls: ['./iridh.component.css']
})
export class IridhComponent implements OnInit {

  constructor(public _uvfService: UvfService) { }

  ngOnInit() {
    this._uvfService.setRUInkBarActive(true);
  }

  ngOnDestroy() {
    this._uvfService.setRUInkBarActive(false);
  }

}
