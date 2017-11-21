import { Injectable } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import { FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { MainProfile } from '../components/dashboard/main-profile/main-profile';

@Injectable()
export class MainprofileService {

	private basePath: string = '/mainprofile';

	MainProfile: FirebaseObjectObservable<MainProfile> = null;
	MainProfileList: FirebaseListObservable<MainProfile[]> = null;
 
  constructor( private db: AngularFireDatabase ) { 
  	this.MainProfileList = this.db.list( this.basePath );

  }

  

}
