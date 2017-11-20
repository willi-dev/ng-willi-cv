import { Component, OnInit } from '@angular/core';
import { Training } from './training';
import { TrainingService } from '../../../providers/training.service';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss']
})
export class TrainingComponent implements OnInit {

	training: Training = new Training();

	public trainings: FirebaseListObservable<Training[]>;

  constructor( private trainingService: TrainingService ) { }

  ngOnInit() {
  	this.trainings = this.trainingService.getListTraining();
  }

  createTraining(){
  	this.trainingService.createTraining(this.training);
  	this.training = new Training();
  }

  deleteTraining(key){
  	this.trainingService.deleteTraining( key );
  }

}
