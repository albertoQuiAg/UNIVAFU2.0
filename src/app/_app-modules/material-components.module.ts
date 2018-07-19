import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatToolbarModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatIconModule,
    MatSnackBarModule,
    MatListModule,
    MatExpansionModule,
    MatCardModule,
    MatDialogModule,
    MatCheckboxModule,
    MatProgressSpinnerModule
} from '@angular/material';
import { LayoutModule } from '../../../node_modules/@angular/cdk/layout';
// import { NoticiasDialogComponent } from '../_dialogs/noticias-dialog/noticias-dialog.component';
// import { CarouselDirective } from '../_directives/carousel.directive';
// import { AlgebraixDialogComponent } from '../_dialogs/algebraix-dialog/algebraix-dialog.component';

@NgModule({
    // declarations: [
    //     NoticiasDialogComponent,
    //     AlgebraixDialogComponent,
    //     CarouselDirective
    // ],
    imports: [
        MatButtonModule,
        MatToolbarModule,
        MatTabsModule,
        MatFormFieldModule,
        MatInputModule,
        MatMenuModule,
        MatIconModule,
        MatSnackBarModule,
        MatListModule,
        MatExpansionModule,
        MatCardModule,
        MatDialogModule,
        MatCheckboxModule,
        LayoutModule,
        MatProgressSpinnerModule
    ],
    exports: [
        MatButtonModule,
        MatToolbarModule,
        MatTabsModule,
        MatFormFieldModule,
        MatInputModule,
        MatMenuModule,
        MatIconModule,
        MatSnackBarModule,
        MatListModule,
        MatExpansionModule,
        MatCardModule,
        MatDialogModule,
        MatCheckboxModule,
        LayoutModule,
        MatProgressSpinnerModule
        // CarouselDirective
    ],
    providers: [],
    // entryComponents: [
    //     NoticiasDialogComponent,
    //     AlgebraixDialogComponent
    // ]
})

export class MaterialComponentsModule { }