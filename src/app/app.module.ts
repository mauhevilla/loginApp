import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { PrivadoPageComponent } from './components/privado-page/privado-page.component';
import { NpFoundPageComponent } from './components/np-found-page/np-found-page.component';

import {FlashMessagesModule} from 'angular2-flash-messages'
import {FlashMessagesService} from 'angular2-flash-messages'

import { AngularFireModule} from 'angularfire2';
import { AngularFireAuthModule, AngularFireAuth} from 'angularfire2/auth'

import { environment} from '../environments/environment';

import{ AuthService} from './servicios/auth.service';
import{ AuthGuard} from './guards/auth.guard';
import { CrudTecnicoComponent } from './components/privado-page/crud-tecnico/crud-tecnico.component';



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,    
    LoginPageComponent,
    RegisterPageComponent,
    PrivadoPageComponent,
    NpFoundPageComponent,
    CrudTecnicoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FlashMessagesModule    

  ],
  providers: [AuthService,AuthGuard,FlashMessagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
