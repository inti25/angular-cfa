import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import {environment} from '../environments/environment';
import { TopicListComponent } from './views/topic-list/topic-list.component';
import { FormsModule } from '@angular/forms';
import { QuestionListComponent } from './views/question-list/question-list.component';
import {KatexModule} from 'ng-katex';
import { QuestionAddComponent } from './views/question-add/question-add.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import {AuthGuard} from './auth/auth-guard';

@NgModule({
  declarations: [
    AppComponent,
    TopicListComponent,
    QuestionListComponent,
    QuestionAddComponent,
    DashboardComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule,
    KatexModule,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
