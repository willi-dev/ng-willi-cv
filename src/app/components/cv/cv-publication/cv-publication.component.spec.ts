import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvPublicationComponent } from './cv-publication.component';

describe('CvPublicationComponent', () => {
  let component: CvPublicationComponent;
  let fixture: ComponentFixture<CvPublicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvPublicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvPublicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
