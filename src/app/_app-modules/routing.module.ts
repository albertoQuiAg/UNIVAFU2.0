import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
    { path: '', loadChildren: 'src/app/_components/home/home.module#HomeModule' },
    { path: 'univafu', loadChildren: 'src/app/_components/univafu/univafu.module#UnivafuModule' },
    { path: 'aviso-legal', loadChildren: 'src/app/_components/aviso-legal/aviso-legal.module#AvisoLegalModule' },
    { path: '**', loadChildren: 'src/app/_components/page-not-found/page-not-found.module#PageNotFoundModule' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class RoutingModule { }