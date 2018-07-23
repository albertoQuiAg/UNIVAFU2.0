import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { MediaMatcher } from '../../../../node_modules/@angular/cdk/layout';

@Component({
  selector: 'app-conocenos',
  templateUrl: './univafu.component.html',
  styleUrls: ['./univafu.component.css']
})
export class UnivafuComponent implements OnInit, OnDestroy {

  mobileQuery: MediaQueryList;
  _mobileQueryListener: () => void;

  constructor(_changeDetectorRef: ChangeDetectorRef, _media: MediaMatcher) {
    this.mobileQuery = _media.matchMedia('(min-width: 900px)');
    this._mobileQueryListener = () => _changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {

  }

  ngOnDestroy() {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

}
