import { Component, OnInit } from '@angular/core';
import { Skill } from './skill';
import { Relatedtools } from './relatedtools';
import { SkillService } from '../../../providers/skill.service';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {

	skill: Skill = new Skill();
	public skills: FirebaseListObservable<Skill[]>; 

	relatedtools: Relatedtools = new Relatedtools();
	public relatedtoolslist: FirebaseListObservable<Relatedtools[]>;

	// relatedTools
  constructor( private skillService: SkillService ) {}

  ngOnInit() {
  	this.skills = this.skillService.getListSkill({ orderByKey: true });
  	this.relatedtoolslist = this.skillService.getListRelatedTool({ orderByKey: true});
  }

  createSkill(){
  	this.skillService.createSkill( this.skill );
  	this.skill = new Skill();
  }

  deleteSkill( key ){
  	this.skillService.deleteSkill( key );
  }

  createTool(){
  	this.skillService.createTool( this.relatedtools );
  	this.relatedtools = new Relatedtools();
  }

  deleteTool( key ){
  	this.skillService.deleteTool( key );
  }

}
