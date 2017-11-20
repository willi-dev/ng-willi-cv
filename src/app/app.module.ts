import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AuthService } from './providers/auth.service';
import { AuthGuard } from './providers/auth-guard.service';

import { WorkService } from './providers/work.service';
import { ProjectsService } from './providers/projects.service';
import { EducationService } from './providers/education.service';
import { PublicationService } from './providers/publication.service';
import { TrainingService } from './providers/training.service'; 

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { CvComponent } from './components/cv/cv.component';
import { ProjectsComponent } from './components/dashboard/projects/projects.component';
import { WorkComponent } from './components/dashboard/work/work.component';
import { TrainingComponent } from './components/dashboard/training/training.component';
import { EducationsComponent } from './components/dashboard/educations/educations.component';
import { PublicationComponent } from './components/dashboard/publication/publication.component';
import { SkillComponent } from './components/dashboard/skill/skill.component';
import { PersonalDetailComponent } from './components/dashboard/personal-detail/personal-detail.component';

export const firebaseConfig = {
  apiKey: 'AIzaSyBMGKToIWVhqy8ITCz3M2Im3ZFO3-9RZqc',
  authDomain: 'ng-willi-cv.firebaseapp.com',
  databaseURL: 'https://ng-willi-cv.firebaseio.com',
  projectId: 'ng-willi-cv',
  storageBucket: 'ng-willi-cv.appspot.com',
  messagingSenderId: '94894335534',
}

const routes: Routes = [
  { path: '', component: CvComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', 
    component: DashboardComponent, 
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: '/dashboard/work',
        pathMatch: 'full'
      },
      {
        path: 'personal-detail',
        component: PersonalDetailComponent
      },
      {
        path: 'work',
        component: WorkComponent
      },
      {
        path: 'projects',
        component: ProjectsComponent
      },
      {
        path: 'educations',
        component: EducationsComponent
      },
      {
        path: 'skill',
        component: SkillComponent
      },
      {
        path: 'training',
        component: TrainingComponent
      },
      {
        path: 'publication',
        component: PublicationComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    LoginComponent,
    CvComponent,
    ProjectsComponent,
    WorkComponent,
    TrainingComponent,
    EducationsComponent,
    PublicationComponent,
    SkillComponent,
    PersonalDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp( firebaseConfig ),
    RouterModule.forRoot( routes ),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  providers: [
    AuthService, 
    AuthGuard, 
    AngularFireDatabase,
    WorkService, 
    ProjectsService,
    EducationService,
    PublicationService,
    TrainingService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }