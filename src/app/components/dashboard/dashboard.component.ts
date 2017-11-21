import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../providers/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  menuOpen: false;

  constructor( private authService: AuthService ) {}

  ngOnInit() {
    console.log( this.authService.isLoggedIn );  
    console.log( "test console log dari dashboard component " );
    console.log( this.menuOpen );
  }

   /*
   * logout 
   */
  logout() {
  	this.authService.logout();
  }

}
