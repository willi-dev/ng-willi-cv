import { Component, OnInit } from '@angular/core';
import { Work } from './work';
import { WorkService } from '../../../providers/work.service';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

	work: Work = new Work();

	public works: FirebaseListObservable<Work[]>;

  constructor( private workService: WorkService ) { }

  ngOnInit() {
  	this.works = this.workService.getListWork({ orderByKey: true })
  		// .map((array) => {return  array.reverse() }) as FirebaseListObservable<Work[]>;
  	console.log( this.works );
  }

  createWork(){
  	this.workService.createWork(this.work);
  	this.work = new Work();
  }

  deleteWork(key) {
  	console.log( key );
  	this.workService.deleteWork( key );
  }

}
