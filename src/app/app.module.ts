import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AuthService } from './providers/auth.service';

import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { RouterModule, Routes } from '@angular/router';

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

import { AuthGuard } from './providers/auth-guard.service';

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
    PublicationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp( firebaseConfig ),
    RouterModule.forRoot( routes ),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
