import { Injectable } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import * firebase from 'firebase/app';

@Injectable()
export class AuthService {

	public isLoggedIn: boolean;
	public user: Observable<firebase.User>;
	public items: FirebaseListObservable<any[]>;
	public messages: FirebaseListObservable<any[]>;

  constructor( public afAuth: AngularFireAuth, private router: Router ) {
  	this.user = afAuth.authState;
  }

  /*
   * loginAuth
   */
  loginAuth(){
  	this.afAuth
			.authState
				.subscribe(
					(auth) => {
						if( auth == null ){
							this.router.navigate(['login']);
							this.setLoginState( false );
						}else{
							this.router.navigate(['']);
							this.setLoginState( true );
						}
					}
				);
  }

  /*
   * loginWithGoogle
   */
  loginWithGoogle(){
  	return this.afAuth
  		.auth
  			.signInWithPopup( new firebase.auth.GoogleAuthProvider() )
  				.then( value => {
  					console.log( 'Nice, it worked!' );
  				})
  				.catch( err => {
  					console.log( 'Something went wrong: ', err.message );
  				});
  }

  /*
   * logout
   */
  logout(){
  	return this.afAuth
  		.auth
  			.signOut();
  }

}
