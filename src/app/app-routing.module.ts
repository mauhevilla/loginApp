import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomePageComponent} from './components/home-page/home-page.component';
import {LoginPageComponent} from './components/login-page/login-page.component';
import {NpFoundPageComponent} from './components/np-found-page/np-found-page.component';

import {PrivadoPageComponent} from './components/privado-page/privado-page.component';
import {RegisterPageComponent}from './components/register-page/register-page.component'
import { CrudTecnicoComponent} from './components/privado-page/crud-tecnico/crud-tecnico.component';
import {CrudMovimientosComponent}  from './components/privado-page/crud-movimientos/crud-movimientos.component';

import {AuthGuard} from './guards/auth.guard';

const routes: Routes = [
  {path:'', component: HomePageComponent},
  {path:'login',component:LoginPageComponent},
  {path:'register',component:RegisterPageComponent},
  {path:'privado',component:PrivadoPageComponent,canActivate:[AuthGuard]},
  {path:'crudTecnico',component:CrudTecnicoComponent,canActivate:[AuthGuard]},
  {path:'crudMovimientos',component:CrudMovimientosComponent,canActivate:[AuthGuard]},
  {path:'**',component:NpFoundPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
