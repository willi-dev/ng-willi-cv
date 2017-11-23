import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../providers/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  menuOpen: boolean = false;

  constructor( public authService: AuthService ) {}

  ngOnInit() {
    console.log( this.authService.isLoggedIn );
  }

   /*
   * logout 
   */
  logout() {
  	this.authService.logout();
  }

}
