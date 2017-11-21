import { Component, OnInit } from '@angular/core';
import { Educations } from './educations';
import { EducationService } from '../../../providers/education.service';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';

@Component({
  selector: 'app-educations',
  templateUrl: './educations.component.html',
  styleUrls: ['./educations.component.scss']
})
export class EducationsComponent implements OnInit {

	education: Educations = new Educations();

	public educations: FirebaseListObservable<Educations[]>;

  constructor( private educationService: EducationService ) { }

  ngOnInit() {
  	this.educations = this.educationService.getListEducations( { orderByKey: true } )
  		.map( (array) => { return array.reverse() }) as FirebaseListObservable<Educations[]>;
  }

  createEducation(){
  	this.educationService.createEducation(this.education);
  	this.education = new Educations();
  }

  deleteEducation( key ){
  	this.educationService.deleteEducation(key);
  }

}
