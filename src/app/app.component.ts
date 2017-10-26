import { Component } from '@angular/core';
import { AuthService } from './providers/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  constructor( public authService: AuthService ){
  	this.authService.loginAuth();
  }

  /*
   * login 
   */
  login(){
  	this.authService.loginWithGoogle();
  }

  /*
   * logout
   */
  logout(){
  	this.authService.logout();
  }
}
