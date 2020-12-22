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

@NgModule({
  declarations: [
    AppComponent,
    TopicListComponent,
    QuestionListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule,
    KatexModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
