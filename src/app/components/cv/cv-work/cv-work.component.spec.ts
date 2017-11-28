import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvWorkComponent } from './cv-work.component';

describe('CvWorkComponent', () => {
  let component: CvWorkComponent;
  let fixture: ComponentFixture<CvWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
