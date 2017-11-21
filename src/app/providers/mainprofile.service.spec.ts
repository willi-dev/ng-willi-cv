import { TestBed, inject } from '@angular/core/testing';

import { MainprofileService } from './mainprofile.service';

describe('MainprofileService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MainprofileService]
    });
  });

  it('should be created', inject([MainprofileService], (service: MainprofileService) => {
    expect(service).toBeTruthy();
  }));
});
