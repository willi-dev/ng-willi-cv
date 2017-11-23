import { Component, OnInit } from '@angular/core';
import { Projects } from './projects';
import { ProjectsService } from '../../../providers/projects.service';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

	project: Projects = new Projects();

	public projects: FirebaseListObservable<Projects[]>;

  constructor( private projectsService: ProjectsService ) { }

  ngOnInit() {
  	this.projects = this.projectsService.getListProjects( { orderByKey: true } )
  		// .map( (array) => {return array.reverse()}) as FirebaseListObservable<Projects[]>;
  }

  createProject(){
  	this.projectsService.createProject(this.project);
  	this.project = new Projects();
  }

  deleteProject( key ){
  	this.projectsService.deleteProject(key);
  }

}
