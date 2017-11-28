import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvSkillComponent } from './cv-skill.component';

describe('CvSkillComponent', () => {
  let component: CvSkillComponent;
  let fixture: ComponentFixture<CvSkillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvSkillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
