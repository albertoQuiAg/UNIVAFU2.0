import { Component, OnInit, ChangeDetectorRef, OnDestroy, ViewChild, Renderer2 } from '@angular/core';
import { MediaMatcher } from '../../../../node_modules/@angular/cdk/layout';
import { MatToolbar } from '../../../../node_modules/@angular/material';
import { fromEvent, Subscription } from '../../../../node_modules/rxjs';
import { map } from 'rxjs/operators';
import { Router } from '../../../../node_modules/@angular/router';
import { UvfService } from '../../_services/uvf.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {

  @ViewChild(MatToolbar) public toolbar: MatToolbar;

  scrollSub: Subscription;
  scrollTop: number;
  mobileQuery: MediaQueryList;
  _mobileQueryListener: () => void;

  constructor(
    _changeDetectorRef: ChangeDetectorRef, 
    _media: MediaMatcher, 
    private _renderer: Renderer2, 
    private _route: Router,
    public _uvfService: UvfService
  ) { 
    this.mobileQuery = _media.matchMedia('(min-width: 900px)');
    this._mobileQueryListener = () => _changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
    this.setScrollEvent();
  }

  ngOnDestroy() {
    this.scrollSub.unsubscribe();
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  setScrollEvent() {
    this.scrollSub = fromEvent(window, 'scroll')
      .pipe(
        map((event: any) => ({
          sT : event.target
        }))
      ).subscribe((scroll) => {
        this.scrollTop = scroll.sT.scrollingElement.scrollTop;

        if(this.scrollTop > 0) {
          this._renderer.addClass(this.toolbar._elementRef.nativeElement, 'dark-navbar');
          this._renderer.addClass(this.toolbar._elementRef.nativeElement, 'animate-navbar');
        } else {
          if (this._route.url !== "/aviso-legal") {
            this._renderer.removeClass(this.toolbar._elementRef.nativeElement, 'dark-navbar');
          }
        }
      });
  }

}
