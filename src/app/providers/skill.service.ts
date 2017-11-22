import { Injectable } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import { FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { Skill } from '../components/dashboard/skill/skill';
import { MessageService } from './message.service';

@Injectable()
export class SkillService {

	private basePath: string = '/skill';

	skill: FirebaseObjectObservable<Skill> = null;
	skills: FirebaseListObservable<Skill[]> = null;

  constructor( private db: AngularFireDatabase, private m: MessageService ) { 
  	this.skills = this.db.list(this.basePath);
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
  
}
