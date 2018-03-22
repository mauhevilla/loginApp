import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomePageComponent} from './componentes/home-page/home-page.component';
import {LoginPageComponent} from './componentes/login-page/login-page.component';
import {NpFoundPageComponent} from './componentes/np-found-page/np-found-page.component';
import {PrivadoPageComponent} from './componentes/privado-page/privado-page.component';
import {RegisterPageComponent}from './componentes/register-page/register-page.component'
const routes: Routes = [
  {path:'', component: HomePageComponent},
  {path:'login',component:LoginPageComponent},
  {path:'register',component:RegisterPageComponent},
  {path:'privado',component:PrivadoPageComponent},
  {path:'**',component:NpFoundPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
