import { Injectable } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import { FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { Educations } from '../components/dashboard/educations/educations';
import { MessageService } from './message.service';

@Injectable()
export class EducationService {

	private basePath: string = '/education';

	education: FirebaseObjectObservable<Educations> = null;
	educations: FirebaseListObservable<Educations[]> = null;
 
  constructor( private db: AngularFireDatabase, private m: MessageService ) {
  	this.educations = this.db.list( this.basePath );
  }

  /**
   * getEducation
   * @return this.education
   */
  getEducation( key: string): FirebaseObjectObservable<Educations> {
  	const educationsPath = `${this.basePath}/${key}`;
  	this.education = this.db.object(educationsPath);
  	return this.education;
  }

  /**
   * getListEducations
   * @return this.educations
   */
  getListEducations(query={}): FirebaseListObservable<Educations[]> {
  	this.educations = this.db.list(this.basePath, {
  		query: query
  	});
  	return this.educations;
  }

  /**
   * createEducation
   * @return void 
   */
  createEducation( education: Educations ): void{
  	this.educations.push( education )
  		.then( error => this.m.handleError( error ))
  }

  /**
   * updateEducation
   * @return void 
   */
  updateEducation(key: string, value: any): void{
  	this.educations.update(key, value)
  		.catch( error => this.m.handleError(error))
  }

  /**
   * deleteEducation
   * @return void 
   */
  deleteEducation( key: string ): void{
  	this.educations.remove( key )
  		.catch( error => this.m.handleError(error))
  }

  /**
   * deleteAllEducations
   * @return void 
   */
  deleteAllEducations(): void{
  	this.educations.remove()
  		.catch( error => this.m.handleError(error))
  }

}
