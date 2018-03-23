import { Component, OnInit } from '@angular/core';
import  { AuthService } from '../../servicios/auth.service';
import { error } from 'util';
import { Router} from '@angular/router';

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
    public ruta :Router 
  ) { }

  ngOnInit() {
  }

  onSubmitAddUser(){
    this.authService.registerUser(this.email,this.password)
      .then((res)=>{
        this.ruta.navigate(['/privado']);
        console.log('bien!!!!');
        console.log(res);
    }).catch( (error)=>{
        console.log(error);        
      });
  }
}
