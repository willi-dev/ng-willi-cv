import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../providers/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor( public authService: AuthService ) {
    this.authService.loginRoute();
  }

  ngOnInit() {
  }

  loginEmail(formData){
    this.authService.loginEmail(formData);
  }

  loginGoogle(){
  	this.authService.loginWithGoogle();
  }

}