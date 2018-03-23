import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../servicios/auth.service';
import { error } from 'util';
import { Router} from '@angular/router';

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
    public ruta : Router
  ) { }

  ngOnInit() {
  }
  
  onSubmitLogin(){
    this.authService.loginEmail(this.email,this.password)
    .then( (res)=>{    
      this.ruta.navigate(['/privado']);
    }).catch((error)=>{
      console.log(error);
      this.ruta.navigate(['/login']);
    })

  }
}
