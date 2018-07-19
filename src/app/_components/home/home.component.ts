import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { UvfService } from 'src/app/_services/uvf.service';
import { MediaMatcher } from '../../../../node_modules/@angular/cdk/layout';
import { take, map } from '../../../../node_modules/rxjs/operators';
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

  constructor(_changeDetectorRef: ChangeDetectorRef, _media: MediaMatcher, private _uvfService: UvfService, private dialog: MatDialog) {

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
    // let dialogHeight: string = window.innerWidth < 768 ? '' : '710px';
    // let dialogWidth: string = window.innerWidth < 768 ? '' : '800px';

    let dialogRef:any = this.dialog.open(NoticiasDialogComponent, {
      // height: dialogHeight,
      // width: dialogWidth,
      data: {
        noticiaData: noticia
      }
    });
  }

}
