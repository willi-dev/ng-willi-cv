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

	MainProfile: FirebaseObjectObservable<Mainprofile> = null;
	MainProfileList: FirebaseListObservable<Mainprofile[]> = null;
 
  constructor( private db: AngularFireDatabase, private m: MessageService ) { 
  	this.MainProfileList = this.db.list( this.basePath );

  }

  

}
