import { Injectable } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import { FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { Projects } from '../components/dashboard/projects/projects';

@Injectable()
export class ProjectsService {

	private basePath: string = '/projects';

	project: FirebaseObjectObservable<Projects> = null;
	projects: FirebaseListObservable<Projects[]> = null;

  constructor( private db: AngularFireDatabase ) {
  	this.projects = this.db.list( this.basePath );
  }

  /**
   * getProject
   * @return this.project
   */
  getProject(key: string): FirebaseObjectObservable<Projects> {
  	const projectPath = `${this.basePath}/$key`;
  	this.project = this.db.object(projectPath);
  	return this.project;
  }

  /**
   * getListProjects
   * @return this.projects
   */
  getListProjects(query = {}): FirebaseListObservable<Projects[]> {
  	this.projects = this.db.list(this.basePath, {
  		query: query
  	});
  	return this.projects;
  }

  /**
   * createProject
   * @return void
   */
  createProject( project: Projects): void{
  	this.projects.push(project)
  		.then( error => this.handleError(error))
  }

  /**
   * updateProject
   * @return void
   */
  updateProject( key: string, value: any ): void {
  	this.projects.update( key, value)
  		.catch( error => this.handleError( error ))
  }

  /**
   * deleteProject
   * @return void
   */
  deleteProject( key: string ): void{
  	this.projects.remove( key )
  		.catch( error => this.handleError(error))
  }

  /**
   * deleteAllProjects
   * @return void
   */
   deleteAllProjects(): void {
   	this.projects.remove()
   		.catch( error => this.handleError(error))
   }

   /**
	   * handleError
	   */
	  private handleError(error){
	  	console.log( error );
	  }

}
