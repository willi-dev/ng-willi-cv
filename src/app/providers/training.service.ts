import { Injectable } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import { FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { Training } from '../components/dashboard/training/training';

@Injectable()
export class TrainingService {

	private basePath: string = '/training';

	training: FirebaseObjectObservable<Training> = null;
	trainings: FirebaseListObservable<Training[]> = null;

  constructor( private db: AngularFireDatabase ) {
  	this.trainings = this.db.list(this.basePath);
  }

  getTraining(key: string): FirebaseObjectObservable<Training> {
  	const trainingPath = `${this.basePath}/$key`;
  	this.training = this.db.object(trainingPath);
  	return this.training;
  }

  getListTraining(query = {}): FirebaseListObservable<Training[]> {
  	this.trainings = this.db.list( this.basePath, {
  		query: query
  	});
  	return this.trainings;
  }

  createTraining(training: Training): void{
  	this.trainings.push( training )
  		.then(error => this.handleError(error))
  }

  updateTraining(key: string, value: any): void{
  	this.trainings.update(key, value)
  		.catch(error => this.handleError(error))
  }

  deleteTraining(key: string): void{
  	this.trainings.remove(key)
  		.catch(error => this.handleError(error))
  }

  deleteAllTraining(): void{
  	this.trainings.remove()
  		.catch( error => this.handleError(error))
  }

  private handleError(error){
  	console.log( error );
  }

}
