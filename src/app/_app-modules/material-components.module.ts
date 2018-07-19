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
    MatProgressSpinnerModule,
    MatSidenavModule
} from '@angular/material';
import { LayoutModule } from '../../../node_modules/@angular/cdk/layout';

@NgModule({
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
        MatProgressSpinnerModule,
        MatSidenavModule
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
        MatProgressSpinnerModule,
        MatSidenavModule
    ],
    providers: []
})

export class MaterialComponentsModule { }