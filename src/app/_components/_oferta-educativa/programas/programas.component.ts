import { Component, OnInit } from '@angular/core';
import { UvfService } from '../../../_services/uvf.service';

@Component({
  selector: 'app-programas',
  templateUrl: './programas.component.html',
  styleUrls: ['./programas.component.css']
})
export class ProgramasComponent implements OnInit {

  constructor(public _uvfService: UvfService) { }

  ngOnInit() {
  }

}
