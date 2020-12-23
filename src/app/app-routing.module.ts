import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TopicListComponent} from './views/topic-list/topic-list.component';
import {QuestionListComponent} from './views/question-list/question-list.component';
import {QuestionAddComponent} from './views/question-add/question-add.component';

const routes: Routes = [
  { path: 'topic', component: TopicListComponent },
  { path: 'question', component: QuestionListComponent },
  { path: 'question/add/:topicId', component: QuestionAddComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
