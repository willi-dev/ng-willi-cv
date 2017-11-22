import { Injectable } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import { FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { Work } from '../components/dashboard/work/work';
import { MessageService } from './message.service';

@Injectable()
export class WorkService {

	private basePath: string = '/work';

	work: FirebaseObjectObservable<Work> = null;
	works: FirebaseListObservable<Work[]> = null;

  constructor( private db: AngularFireDatabase, private m: MessageService ) { 
    this.works = this.db.list(this.basePath);
  }

  /**
   * getWork
   * @return this.work
   */
  getWork(key: string): FirebaseObjectObservable<Work> {
  	const workPath = `${this.basePath}/${key}`;
  	this.work = this.db.object(workPath);
  	return this.work;
  }

  /**
   * getListWork
   * @return this.works
   */
  getListWork(query={}): FirebaseListObservable<Work[]> {
  	this.works = this.db.list(this.basePath, {
  		query: query
    });
  	return this.works;
  }

  /**
   * createWork
   * @return void
   */
  createWork(work: Work): void{
  	this.works.push(work)
      .then(error=> this.m.handleError(error))
  }

  /**
   * updateWork
   * @return void 
   */
  updateWork(key: string, value: any): void{
  	this.works.update(key, value)
  		.catch(error => this.m.handleError(error))
  }

  /**
   * deleteWork
   * @return void 
   */
  deleteWork( key: string ): void{
    console.log( "key: " + key );
  	this.works.remove( key )
  		.catch(error => this.m.handleError(error))
  }

  /**
   * deleteAllWorks
   * @return void 
   */
  deleteAllWork(): void{
  	this.works.remove()
  		.catch(error => this.m.handleError(error))
  }

}
