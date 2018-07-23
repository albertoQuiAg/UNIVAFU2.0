import { Component, ViewChild, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { MatSidenav, MatDialog } from '../../node_modules/@angular/material';
import { UvfService } from './_services/uvf.service';
import { AlgebraixDialogComponent } from './_components/_dialogs/algebraix-dialog/algebraix-dialog.component';
import { MediaMatcher } from '../../node_modules/@angular/cdk/layout';
import { Subscription } from '../../node_modules/rxjs';
import { Router, NavigationEnd } from '../../node_modules/@angular/router';
import { filter } from '../../node_modules/rxjs/operators';

@Component({
  selector: 'app-univafu',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnDestroy {

  @ViewChild('sidenav') public sidenav: MatSidenav;
  mobileLinks: Array<
  {
    label: string, 
    url: string, 
    expandIconId: string, 
    lvl2id: string, 
    lvl2: any
  }>;

  mobileQuery: MediaQueryList;
  _mobileQueryListener: () => void;
  routeSub: Subscription;

  constructor(
    public _uvfService: UvfService, 
    private dialog: MatDialog, 
    _changeDetectorRef: ChangeDetectorRef, 
    _media: MediaMatcher, 
    private router: Router
  ) {

    this.mobileLinks = [
      { label: 'Inicio', url: "/", expandIconId: null, lvl2id: null, lvl2: null },
      { label: 'UNIVAFU', url: "univafu", expandIconId: null, lvl2id: null, lvl2: null },
      { label: 'Oferta Educativa', url: null, expandIconId: "ex1", lvl2id: "id1", lvl2: [
        { url: "oferta-educativa/licenciaturas", label: "Licenciaturas" },
        { url: "oferta-educativa/posgrados", label: "Posgrados" },
        { url: "oferta-educativa/educacion-continua", label: "Educación Continua" },
        { url: "https://c1-univafu.algebraix.com/bin/g/enrollments/default/", label: "Inscripciones en línea", website: true }
      ] },
      { label: 'Red UNIVAFU', url: null, expandIconId: "ex2", lvl2id: "id2", lvl2: [
        { url: "red-univafu/iiu", label: "IIU" },
        { url: "red-univafu/fundacion", label: "Fundación" },
        { url: "red-univafu/iridh", label: "IRIDH" },
        { url: "red-univafu/innovagain", label: "Innovagain" },
        { url: "", label: "Algebraix", clickeable: true },
      ] },
      { label: 'Contacto', url: "contacto", expandIconId: null, lvl2id: null, lvl2: null },
      { label: 'Aviso de privacidad', url: "/aviso-legal", expandIconId: null, lvl2id: null, lvl2: null },
    ];

    this.mobileQuery = _media.matchMedia('(min-width: 900px)');
    this._mobileQueryListener = () => _changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

  }

  ngOnInit() {
    this.setRouterEvents();
    this._uvfService.setNavside(this.sidenav);
    this.checkMenu();

    this.mobileQuery.addListener((wea: any) => {
      if (this.sidenav.opened) {
        this.sidenav.close();
      }
    });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  setRouterEvents() {
    this.routeSub = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      window.scrollTo(0, 0);
    })
  }

  onLvl2Click(id, expandId) {
    if(!id) {
      return;
    }

    let divLvl2 = document.getElementById(id) as HTMLElement;
    
    if(divLvl2.style.maxHeight) {
      divLvl2.style.maxHeight = null;
    } else {
      divLvl2.style.maxHeight = divLvl2.scrollHeight + 'px';
    }

    document.getElementById(expandId).classList.toggle('lvl2-icon-active');
  }

  checkMenu() {
    setTimeout(() => {
      let sublvlArray:any = document.querySelectorAll('.wrapper-lvl2');

      for(let lvl of sublvlArray) {
        if(lvl.querySelector('.active')) {
          lvl.style.maxHeight = lvl.scrollHeight + 'px';
          lvl.parentElement.querySelector('.lvl2-icon').classList.toggle('lvl2-icon-active');
        }
      }
    });
  }

  onAlgebraix() {
    this.sidenav.close().then(() => {
      this.dialog.open(AlgebraixDialogComponent);
    });
  }

}
