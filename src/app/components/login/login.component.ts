import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../providers/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor( public authService: AuthService ) { 
  	this.authService.loginAuth();
  }

  ngOnInit() {
  }

  /*
   * login 
   */
  // login() {
  // 	this.authService.loginWithGoogle();
  // }

  loginGoogle(){
  	this.authService.loginWithGoogle();
  }

  /*
   * logout 
   */
  // logout() {
  // 	this.authService.logout();
  // }

}
