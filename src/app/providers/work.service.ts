import { Injectable } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import { FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { Work } from '../components/dashboard/work/work';

@Injectable()
export class WorkService {

	private basePath: string = '/work';

	work: FirebaseObjectObservable<Work> = null;
	works: FirebaseListObservable<Work[]> = null;

  constructor( private db: AngularFireDatabase ) { 
    this.works = this.db.list(this.basePath);
  }

  getWork(key: string): FirebaseObjectObservable<Work> {
  	const workPath = `${this.basePath}/$key`;
  	this.work = this.db.object(workPath);
  	return this.work;
  }

  getListWork(query={}): FirebaseListObservable<Work[]> {
  	this.works = this.db.list(this.basePath, {
  		query: query
  	// }).map((array) => array.reverse()) as FirebaseListObservable<Work[]>;
    });
  	return this.works;
  }

  createWork(work: Work): void{
  	this.works.push(work)
      .then(error=> this.handleError(error))
  }

  updateWork(key: string, value: any): void{
  	this.works.update(key, value)
  		.catch(error => this.handleError(error))
  }

  deleteWork( key: string ): void{
    console.log( "key: " + key );
  	this.works.remove( key )
  		.catch(error => this.handleError(error))
  }

  deleteAllWork(): void{
  	this.works.remove()
  		.catch(error => this.handleError(error))
  }

  private handleError(error){
  	console.log( error );
  }

}
