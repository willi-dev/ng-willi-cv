import { Component, OnInit } from '@angular/core';
import { Publication } from './publication';
import { PublicationService } from '../../../providers/publication.service';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.scss']
})
export class PublicationComponent implements OnInit {

	publication: Publication = new Publication();

	public publications: FirebaseListObservable<Publication[]>;

  constructor( private publicationService: PublicationService ) { }

  ngOnInit() {
  	this.publications = this.publicationService.getListPublication();
  }

  createPublication(){
  	this.publicationService.createPublication(this.publication);
  	this.publication = new Publication();
  }

  deletePublication(key){
  	this.publicationService.deletePublication(key);
  }

}
