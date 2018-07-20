import { Component, OnInit, ChangeDetectorRef, OnDestroy, ElementRef, Renderer2 } from '@angular/core';
import { UvfService } from 'src/app/_services/uvf.service';
import { MediaMatcher } from '../../../../node_modules/@angular/cdk/layout';
import { take, map, filter } from '../../../../node_modules/rxjs/operators';
import { MatDialog } from '../../../../node_modules/@angular/material';
import { NoticiasDialogComponent } from '../_dialogs/noticias-dialog/noticias-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  mobileQuery: MediaQueryList;
  _mobileQueryListener: () => void;
  noticias: any;

  constructor(
    _changeDetectorRef: ChangeDetectorRef,
    _media: MediaMatcher,
    private _uvfService: UvfService,
    private dialog: MatDialog,
    private render: Renderer2) {

    this.mobileQuery = _media.matchMedia('(min-width: 900px)');
    this._mobileQueryListener = () => _changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

   }

  ngOnInit() {
    this.loadNoticias();
  }

  ngOnDestroy() {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  loadNoticias() {
    this._uvfService.loadNoticiasData().pipe(
      take(1),
      map((data:any) => {
        return data.body.noticias
      })
    ).subscribe((data:any) => {
      this.noticias = data;
    });
  }

  openNoticia(noticia: any) {
    let dialogRef:any = this.dialog.open(NoticiasDialogComponent, {
      data: {
        noticiaData: noticia
      }
    });
  }

  onPropuestaEnter(element: Element, img: Element) {
    if (!this.mobileQuery.matches) {
      return;
    }

    this.render.setStyle(element, 'transform', 'translateY(-120%)');
    this.render.setStyle(img.firstChild, 'filter', 'sepia(100%) brightness(80%)');
    setTimeout(() => {
      this.render.setStyle(element.children[0], 'transform', 'scale(1)');
      this.render.setStyle(element.children[0], 'opacity', '1');
    }, 140);
  }

  onPropuestaLeave(element: Element, img: Element) {
    if (!this.mobileQuery.matches) {
      return;
    }

    this.render.setStyle(element, 'transform', 'translateY(0)');
    this.render.setStyle(img.firstChild, 'filter', 'sepia(0) brightness(100%)');
    this.render.setStyle(element.children[0], 'transform', 'scale(0)');
    this.render.setStyle(element.children[0], 'opacity', '0');
  }

  onServsEnter(el: Element) {
    if (!this.mobileQuery.matches) {
      return;
    }

    if (el.children[0].classList.contains('serv-img')) {
      this.render.setStyle(el.children[0], 'transform', 'scale(1.1)');
      this.render.addClass(el.children[1], 'serv-animate-descs');
      this.render.setStyle(el.children[1].children[1], 'color', '#fff');
    } else {
      this.render.setStyle(el.children[1], 'transform', 'scale(1.1)');
      this.render.addClass(el.children[0], 'serv-animate-descs');
      this.render.setStyle(el.children[0].children[1], 'color', '#fff');
    }
  }

  onServsLeave(el: Element) {
    if (!this.mobileQuery.matches) {
      return;
    }

    if (el.children[0].classList.contains('serv-img')) {
      this.render.setStyle(el.children[0], 'transform', 'scale(1)');
      this.render.removeClass(el.children[1], 'serv-animate-descs');
      this.render.setStyle(el.children[1].children[1], 'color', '#000');
    } else {
      this.render.setStyle(el.children[1], 'transform', 'scale(1)');
      this.render.removeClass(el.children[0], 'serv-animate-descs');
      this.render.setStyle(el.children[0].children[1], 'color', '#000');
    }
  }

}
