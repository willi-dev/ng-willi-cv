import { Injectable } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import { FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { PersonalDetail } from '../components/dashboard/personal-detail/personal-detail';

@Injectable()
export class PersonaldetailService {

	private basePath: string = '/personaldetail';

	personalDetail: FirebaseObjectObservable<PersonalDetail> = null;
	personalDetails: FirebaseListObservable<PersonalDetail[]> = null;

  constructor( private db: AngularFireDatabase ) { 
  	this.personalDetails = this.db.list( this.basePath );
  }

  getDetail(): FirebaseObjectObservable<PersonalDetail> {
  	const detailPath = `${this.basePath}/$key`;
  	this.personalDetail = this.db.object( detailPath );
  	return this.personalDetail;
  }

  getListDetail(query:{}): FirebaseListObservable<PersonalDetail[]> {
  	this.personalDetails = this.db.list( this.basePath, {
  		query: query
  	});
  	return this.personalDetails;
  }

  createDetail( detail: PersonalDetail ): void{
  	this.personalDetails.push( detail )
  		.then( error => this.handleError( error ));
  }

  updateDetail( key: string, value: any ): void {
  	this.personalDetails.update( key, value )
  		.catch( error => this.handleError(error));
  }

  deleteDetail( key: string ): void {
  	this.personalDetails.remove( key )
  		.catch( error => this.handleError(error));
  }

  deleteAllDetail(){
  	this.personalDetails.remove()
  		.catch( error => this.handleError( error ));
  }

  private handleError(error){
  	console.log( error );
  }

}
