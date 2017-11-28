import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvTrainingComponent } from './cv-training.component';

describe('CvTrainingComponent', () => {
  let component: CvTrainingComponent;
  let fixture: ComponentFixture<CvTrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvTrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
