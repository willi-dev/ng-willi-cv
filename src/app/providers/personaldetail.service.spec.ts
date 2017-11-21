import { TestBed, inject } from '@angular/core/testing';

import { PersonaldetailService } from './personaldetail.service';

describe('PersonaldetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PersonaldetailService]
    });
  });

  it('should be created', inject([PersonaldetailService], (service: PersonaldetailService) => {
    expect(service).toBeTruthy();
  }));
});
