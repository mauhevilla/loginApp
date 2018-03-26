import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../servicios/auth.service';
import { error } from 'util';
import { Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages'

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  public email :string;
  public password : string;

  constructor(
    public authService : AuthService,
    public ruta : Router,
    public flashMesage:FlashMessagesService
  ) { }

  ngOnInit() {
  }
  
  onSubmitLogin(){
    this.authService.loginEmail(this.email,this.password)
    .then( (res)=>{  
      this.flashMesage.show('Usuario Logeado Correctamente',
      {cssClass:'alert-success',timeout:4000}); 
      this.ruta.navigate(['/privado']);
    }).catch((error)=>{      
      this.flashMesage.show(error.messages,
        {cssClass:'alert-danger',timeout:4000});  
      console.log(error);
      this.ruta.navigate(['/login']);
    })  
  }

  onClickGoogleLogin() {
    this.authService.loginGoogle()
      .then((res) => {
        this.ruta.navigate(['/privado']);
    }).catch( error => console.log(error.messages));
  }
}
