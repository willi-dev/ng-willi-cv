import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../providers/auth.service';
import { moveIn, fallIn } from '../../router.animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [moveIn(), fallIn()],
  host: {'[@moveIn]': ''}
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