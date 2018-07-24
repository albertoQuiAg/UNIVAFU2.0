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
import { FooterComponent } from '../_components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '../../../node_modules/@angular/forms';

@NgModule({
    declarations: [
        FooterComponent
    ],
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
        FormsModule,
        ReactiveFormsModule,
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
        MatSidenavModule,
        FooterComponent
    ],
    providers: []
})

export class MaterialComponentsModule { }