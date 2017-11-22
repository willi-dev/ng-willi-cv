import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {

  constructor() { }

  public handleError( error ){
		console.log( error )
	}
	
}
