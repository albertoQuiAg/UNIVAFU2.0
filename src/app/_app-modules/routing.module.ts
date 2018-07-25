import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
    { path: '', loadChildren: 'src/app/_components/home/home.module#HomeModule' },
    { path: 'univafu', loadChildren: 'src/app/_components/univafu/univafu.module#UnivafuModule' },
    { path: 'red-univafu/iiu', loadChildren: 'src/app/_components/_red-univafu/iiu/iiu.module#IiuModule' },
    { path: 'red-univafu/fundacion', loadChildren: 'src/app/_components/_red-univafu/fundacion/fundacion.module#FundacionModule' },
    { path: 'contacto', loadChildren: 'src/app/_components/contacto/contacto.module#ContactoModule' },
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