import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../providers/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor( private authService: AuthService ) { }

  ngOnInit() {
  }

   /*
   * logout 
   */
  logout() {
  	this.authService.logout();
  }

}
