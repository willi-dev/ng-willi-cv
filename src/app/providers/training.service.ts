import { Injectable } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import { FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { Training } from '../components/dashboard/training/training';
import { MessageService } from './message.service';

@Injectable()
export class TrainingService {

	private basePath: string = '/training';

	training: FirebaseObjectObservable<Training> = null;
	trainings: FirebaseListObservable<Training[]> = null;

  constructor( private db: AngularFireDatabase, private m: MessageService ) {
  	this.trainings = this.db.list(this.basePath);
  }

  getTraining(key: string): FirebaseObjectObservable<Training> {
  	const trainingPath = `${this.basePath}/${key}`;
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
  		.then(error => this.m.handleError(error))
  }

  updateTraining(key: string, value: any): void{
  	this.trainings.update(key, value)
  		.catch(error => this.m.handleError(error))
  }

  deleteTraining(key: string): void{
  	this.trainings.remove(key)
  		.catch(error => this.m.handleError(error))
  }

  deleteAllTraining(): void{
  	this.trainings.remove()
  		.catch( error => this.m.handleError(error))
  }
  
}
