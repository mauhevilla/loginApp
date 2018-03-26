import { Component, OnInit } from '@angular/core';
import  { AuthService } from '../../servicios/auth.service';
import { error } from 'util';
import { Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages'

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {
  public email :string;
  public password : string;
  constructor(
    public authService :AuthService,
    public ruta :Router ,
    public flashMesage:FlashMessagesService
  ) { }

  ngOnInit() {
  }

  onSubmitAddUser(){
    this.authService.registerUser(this.email,this.password)
      .then((res)=>{
        this.flashMesage.show('Usuario Creado Correctamente',
            {cssClass:'alert-success',timeout:4000});
        this.ruta.navigate(['/privado']);
        console.log('bien!!!!');
        console.log(res);
    }).catch( (error)=>{
      this.flashMesage.show(error.messages,
      {cssClass:'alert-danger',timeout:4000});   
      });
  }
}
