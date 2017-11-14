import { Injectable } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {

	public isLoggedIn: boolean;
	public user: Observable<firebase.User>;
	public items: FirebaseListObservable<any[]>;
	public messages: FirebaseListObservable<any[]>;

  public state: string = '';
  public error: any = '';

  constructor( public afAuth: AngularFireAuth, private router: Router ) {
  	
  }

  loginRoute(){
    this.afAuth
      .authState
        .subscribe(
          (auth) => {
            if( auth == null ){
              this.router.navigate(['login']);
            }else{
              this.router.navigate(['dashboard']);
              this.error = '';
            }
          }
        );
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
							// this.router.navigate(['login']);
							this.setLoginState( false );
							console.log( 'login state false' );
						}else{
							// this.router.navigate(['dashboard']);
							this.setLoginState( true );
							console.log( 'login state true' );
						}
					}
				);
  }

  routeLoginState(){
    if( this.getLoginState() ){
      this.router.navigate(['dashboard']);
    }else{
      this.router.navigate(['login']);
    }
  }

  /*
   * setLoginState
   */
  setLoginState( state: boolean ){
  	this.isLoggedIn = state;
    this.error = '';
  }

  /*
   * getLoginState
   */ 
  getLoginState(){
    return this.isLoggedIn;
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
   * login with email and password
   */
  loginEmail(formData){
    if( formData.valid ){
      console.log( formData.value );
      this.afAuth.auth.signInWithEmailAndPassword(
        formData.value.useremail,
        formData.value.userpassword
      ).then(
        (success) => {
          console.log( success );
          this.setLoginState( true );
          this.router.navigate(['/dashboard']);
        }
      ).catch(
        (error) => {
          console.error( 'error : ' + error );
          this.setLoginState( false );
          this.error = error;
        }
      )
    }else{

    }
  }

  /*
   * logout
   */
  logout(){
    this.afAuth
      .auth 
        .signOut();
    console.log( 'logged out' );
    this.router.navigateByUrl('/login');
  }

  

}
