import { Component, OnInit, Renderer2, OnDestroy } from '@angular/core';
import { UvfService } from '../../_services/uvf.service';

@Component({
  selector: 'app-aviso-legal',
  templateUrl: './aviso-legal.component.html',
  styleUrls: ['./aviso-legal.component.css']
})
export class AvisoLegalComponent implements OnInit, OnDestroy {

  constructor(private _uvfService: UvfService, private render: Renderer2) { }

  ngOnInit() {
    this.render.addClass(this._uvfService.toolbar._elementRef.nativeElement, 'aviso-style');
  }

  ngOnDestroy() {
    this.render.removeClass(this._uvfService.toolbar._elementRef.nativeElement, 'aviso-style');
  }

}
