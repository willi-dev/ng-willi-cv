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
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    LoginComponent,
    CvComponent
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
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
