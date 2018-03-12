import { Injectable } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import { FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { Personaldetail } from '../components/dashboard/personal-detail/personal-detail';
import { MessageService } from './message.service';

@Injectable()
export class PersonaldetailService {

	private basePath: string = '/personaldetail';

	personalDetail: FirebaseObjectObservable<Personaldetail> = null;
	personalDetails: FirebaseListObservable<Personaldetail[]> = null;

  constructor( private db: AngularFireDatabase, private m: MessageService ) { 
  	this.personalDetails = this.db.list( this.basePath );
  }

  getDetail(key: string): FirebaseObjectObservable<Personaldetail> {
  	const detailPath = `${this.basePath}/${key}`;
  	this.personalDetail = this.db.object( detailPath );
  	return this.personalDetail;
  }

  getListDetail( query = {} ): FirebaseListObservable<Personaldetail[]> {
  	this.personalDetails = this.db.list( this.basePath, {
  		query: query
  	});
  	return this.personalDetails;
  }

  createDetail( detail: Personaldetail ): void{
  	this.personalDetails.push( detail )
  		.then( error => this.m.handleError( error ));
  }

  updateDetail( key: string, value: any ): void {
  	this.personalDetails.update( key, value )
  		.catch( error => this.m.handleError(error));
  }

  deleteDetail( key: string ): void {
  	this.personalDetails.remove( key )
  		.catch( error => this.m.handleError(error));
  }

  deleteAllDetail(): void{
  	this.personalDetails.remove()
  		.catch( error => this.m.handleError( error ));
  }

}
