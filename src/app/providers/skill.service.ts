import { Injectable } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import { FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { Skill } from '../components/dashboard/skill/skill';
import { Relatedtools } from '../components/dashboard/skill/relatedtools';
import { MessageService } from './message.service';

@Injectable()
export class SkillService {

	private basePath: string = '/skill';
  private basePathRelated: string = '/related';

	skill: FirebaseObjectObservable<Skill> = null;
	skills: FirebaseListObservable<Skill[]> = null;

  relatedTool: FirebaseObjectObservable<Relatedtools> = null;
  relatedTools: FirebaseListObservable<Relatedtools[]> = null;

  constructor( private db: AngularFireDatabase, private m: MessageService ) { 
  	this.skills = this.db.list(this.basePath);
    this.relatedTools = this.db.list( this.basePathRelated );
  }

  getSkill( key: string ): FirebaseObjectObservable<Skill> {
  	const skillPath = `${this.basePath}/${key}`;
  	this.skill = this.db.object(skillPath);
  	return this.skill;
  }

  getListSkill(query: {}): FirebaseListObservable<Skill[]> {
  	this.skills = this.db.list( this.basePath, {
  		query: query 
  	});
  	return this.skills;
  }

  createSkill( skill: Skill ): void {
  	this.skills.push( skill )
  		.then( error => this.m.handleError( error ));
  }

  updateSkill( key: string, value: any ): void {
    this.skills.update( key, value )
      .catch( error => this.m.handleError(error));
  }

  deleteSkill( key : string ): void {
  	this.skills.remove( key )
  		.catch( error => this.m.handleError( error ));
  }

  deleteAllSkill(): void {
  	this.skills.remove()
  		.catch( error => this.m.handleError( error ));
  }

  getRelatedTool( key: string ): FirebaseObjectObservable<Relatedtools> {
    const toolPath = `${this.basePath}/${key}`;
    this.relatedTool = this.db.object( toolPath );
    return this.relatedTool;
  }

  getListRelatedTool(query: {}): FirebaseListObservable<Relatedtools[]> {
    this.relatedTools = this.db.list( this.basePathRelated, {
      query: query
    });
    return this.relatedTools;
  }

  createTool( relatedTools: Relatedtools ): void {
    this.relatedTools.push( relatedTools )
      .then( error => this.m.handleError(error));
  }

  deleteTool( key: string ): void{
    this.relatedTools.remove( key )
      .catch( error => this.m.handleError(error) );
  }
  
}
