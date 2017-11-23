import { Injectable } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import { FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { Mainprofile } from '../components/dashboard/main-profile/main-profile';
import { MessageService } from './message.service';

@Injectable()
export class MainprofileService {

	private basePath: string = '/mainprofile';

	mainProfile: FirebaseObjectObservable<Mainprofile> = null;
	mainProfileList: FirebaseListObservable<Mainprofile[]> = null;
 
  constructor( private db: AngularFireDatabase, private m: MessageService ) { 
  	this.mainProfileList = this.db.list( this.basePath );
  }

  getProfile( key: string ): FirebaseObjectObservable<Mainprofile> {
  	const profilePath = `${this.basePath}/${key}`;
  	this.mainProfile = this.db.object( profilePath );
  	return this.mainProfile;
  }

  getListProfile( query: {} ): FirebaseListObservable<Mainprofile[]> {
  	this.mainProfileList = this.db.list( this.basePath, {
  		query: query
  	});
  	return this.mainProfileList;
  }

  createProfile( profile: Mainprofile ): void{
  	this.mainProfileList.push( profile )
  		.then( error => this.m.handleError(error));
  }

  updateProfile( key: string, value: any ): void{
  	this.mainProfileList.update( key, value )
  		.catch( error => this.m.handleError( error ));
  }

  deleteProfile( key: string ): void {
  	this.mainProfileList.remove( key )
  		.catch( error =>  this.m.handleError( error ) );
  }

  deleteAllProfile(): void {
  	this.mainProfileList.remove()
  		.catch( error => this.m.handleError( error ));
  }

}
