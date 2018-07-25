import { Component, OnInit, OnDestroy } from '@angular/core';
import { UvfService } from '../../_services/uvf.service';

@Component({
  selector: 'app-conocenos',
  templateUrl: './univafu.component.html',
  styleUrls: ['./univafu.component.css']
})
export class UnivafuComponent implements OnInit, OnDestroy {

  constructor(public _uvfService: UvfService) { }

  ngOnInit() {

  }

  ngOnDestroy() {

  }

}
