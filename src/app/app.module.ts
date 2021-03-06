import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
// componentes
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { PrivadoPageComponent } from './components/privado-page/privado-page.component';
import { NpFoundPageComponent } from './components/np-found-page/np-found-page.component';
import { CrudMovimientosComponent } from './components/privado-page/crud-movimientos/crud-movimientos.component';
import { CrudTecnicoComponent } from './components/privado-page/crud-tecnico/crud-tecnico.component';
import { MenulatComponent } from './components/privado-page/menulat/menulat.component';
import { CobIngresosComponent } from './components/privado-page/cob-ingresos/cob-ingresos.component';

import {FlashMessagesModule} from 'angular2-flash-messages'
import {FlashMessagesService} from 'angular2-flash-messages'
//angular database
import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule} from 'angularfire2/database';
import { environment} from '../environments/environment';
//angular storage
import { AngularFireStorageModule} from 'angularfire2/storage';
import { AngularFirestoreModule } from 'angularfire2/firestore';
//angular seguridad
import { AngularFireAuthModule, AngularFireAuth} from 'angularfire2/auth'

// rutas
import{ AuthService} from './servicios/auth.service';
import{ AuthGuard} from './guards/auth.guard';

// importo las animaciones
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import{ ToastrModule} from 'ngx-toastr';

//servicios
import { TecnicoService} from './servicios/tecnico.service';
import { MovimientosService}from './servicios/movimientos.service';
import { UploadService}from './servicios/upload.service';
import {CobranzasService }from './servicios/cobranzas.service';



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,    
    LoginPageComponent,
    RegisterPageComponent,
    PrivadoPageComponent,
    CrudTecnicoComponent,
    CrudMovimientosComponent,
    NpFoundPageComponent,
    MenulatComponent,
    CobIngresosComponent
  ],
  imports: [
    BrowserModule,FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireStorageModule,
    AppRoutingModule,    
    AngularFireAuthModule,  
    AngularFireDatabaseModule,
    FlashMessagesModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule 
  ],
  providers: [AuthService,AuthGuard,FlashMessagesService,
    UploadService,TecnicoService,MovimientosService,CobranzasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
