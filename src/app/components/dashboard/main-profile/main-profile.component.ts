import { Component, OnInit } from '@angular/core';
import { Mainprofile } from './main-profile';
import { MainprofileService } from '../../../providers/mainprofile.service';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';

@Component({
  selector: 'app-main-profile',
  templateUrl: './main-profile.component.html',
  styleUrls: ['./main-profile.component.scss']
})
export class MainProfileComponent implements OnInit {

	mainProfile: Mainprofile = new Mainprofile();
	public mainProfileList: FirebaseListObservable<Mainprofile[]>;

	formEdit: boolean = false;

  constructor( private mainprofileService: MainprofileService ) { }

  ngOnInit() {
  	this.mainProfileList = this.mainprofileService.getListProfile({orderByKey: true});
  }

  createProfile(){
  	this.mainprofileService.createProfile(this.mainProfile);
  }

  updateProfile( key: string, value: any ){
  	this.mainprofileService.updateProfile( key, value );
  	this.formEdit = false;
  }

  deleteProfile( key ){
  	this.mainprofileService.deleteProfile( key );
  }

  showFormEdit( status: boolean, mp ){
  	this.formEdit = status;
  	if( this.formEdit ){
  		this.mainProfile = mp;
  	}
  }

}
