import { Component, OnInit, OnDestroy, ViewChild, Renderer2 } from '@angular/core';
import { MatToolbar, MatDialog } from '../../../../node_modules/@angular/material';
import { fromEvent, Subscription } from '../../../../node_modules/rxjs';
import { map } from 'rxjs/operators';
import { UvfService } from '../../_services/uvf.service';
import { AlgebraixDialogComponent } from '../_dialogs/algebraix-dialog/algebraix-dialog.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {

  @ViewChild(MatToolbar) public toolbar: MatToolbar;

  scrollSub: Subscription;
  scrollTop: number;

  // @Output() public menuClosed: EventEmitter<void> = new EventEmitter<void>();
  // @Output() public menuOpened: EventEmitter<void> = new EventEmitter<void>();

  public navLinks: any = [
    { "path": "", "label": "Inicio" },
    { "path": "univafu", "label": "UNIVAFU" }
  ];


  constructor(
    private _renderer: Renderer2,
    public _uvfService: UvfService,
    private dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.setScrollEvent();
    this._uvfService.setToolbar(this.toolbar);
  }

  ngOnDestroy() {
    this.scrollSub.unsubscribe();
  }

  setScrollEvent() {
    this.scrollSub = fromEvent(window, 'scroll')
      .pipe(
        map((event: any) => ({
          sT: event.target
        }))
      ).subscribe((scroll) => {
        this.scrollTop = scroll.sT.scrollingElement.scrollTop;

        if (this.scrollTop > 0) {
          this._renderer.addClass(this.toolbar._elementRef.nativeElement, 'dark-navbar');
          this._renderer.addClass(this.toolbar._elementRef.nativeElement, 'animate-navbar');
        } else {
          this._renderer.removeClass(this.toolbar._elementRef.nativeElement, 'dark-navbar');
        }
      });
  }

  onAlgebraix() {
    this.dialog.open(AlgebraixDialogComponent);
  }

  // onOEMenuOpen(id: string) {
  //   if (id === 'OE') {
  //     this.naOEState = "active";
  //   } else {
  //     this.naRedState = "active"
  //   }
  // }

  // onOEMenuClose(id: string) {
  //   if (id === 'OE') {
  //     this.naOEState = "inactive";
  //   } else {
  //     this.naRedState = "inactive";
  //   }
  // }

}
