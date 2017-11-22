import { Component, OnInit } from '@angular/core';
import { Personaldetail } from './personal-detail';
import { PersonaldetailService } from '../../../providers/personaldetail.service';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';

@Component({
  selector: 'app-personal-detail',
  templateUrl: './personal-detail.component.html',
  styleUrls: ['./personal-detail.component.scss']
})
export class PersonalDetailComponent implements OnInit {

	personalDetail: Personaldetail;
	public personalDetails: FirebaseListObservable<Personaldetail[]>;

	formEdit: boolean = false;

  constructor( private personaldetailService: PersonaldetailService ) { }

  ngOnInit() {
  	this.personalDetails = this.personaldetailService.getListDetail({ orderByKey: true });
  }

  createDetail(){
  	this.personaldetailService.createDetail(this.personalDetail);
  }

  updateDetail( key: string, value: any){
  	this.personaldetailService.updateDetail( key, value );
  	this.formEdit = false;
  }

  deleteDetail( key ){
  	this.personaldetailService.deleteDetail(key);
  }

  showFormEdit( status: boolean, pd ){
  	this.formEdit = status;
  	if( this.formEdit ){
  		this.personalDetail = pd;
  	}
  }

}
