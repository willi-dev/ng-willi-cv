import { Injectable } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import { FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { Publication } from '../components/dashboard/publication/publication';
import { MessageService } from './message.service';

@Injectable()
export class PublicationService {

	private basePath: string = '/publication';

	publication: FirebaseObjectObservable<Publication> = null;
	publications: FirebaseListObservable<Publication[]> = null;

  constructor( private db: AngularFireDatabase, private m: MessageService ) { 
  	this.publications = this.db.list(this.basePath);
  }

  getPublication(key: string): FirebaseObjectObservable<Publication>{
  	const publicationPath = `${this.basePath}/${key}`;
  	this.publication = this.db.object(publicationPath);
  	return this.publication;
  }

  getListPublication(query={}): FirebaseListObservable<Publication[]> {
  	this.publications = this.db.list(this.basePath, {
  		query: 	query
  	});
  	return this.publications;
  }

  createPublication(publication: Publication): void{
  	this.publications.push(publication)
  		.then( error => this.m.handleError(error))
  }

  updatePublication(key: string, value: any): void{
  	this.publications.update(key, value)
  		.catch( error => this.m.handleError(error))
  }

  deletePublication( key: string ): void{
  	this.publications.remove(key)
  		.catch(error => this.m.handleError(error))
  }

  deleteAllPublications(): void{
  	this.publications.remove()
  		.catch(error => this.m.handleError(error))
  }

}
