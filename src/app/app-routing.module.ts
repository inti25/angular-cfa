import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TopicListComponent} from './views/topic-list/topic-list.component';
import {QuestionListComponent} from './views/question-list/question-list.component';
import {QuestionAddComponent} from './views/question-add/question-add.component';
import {DashboardComponent} from './views/dashboard/dashboard.component';
import {LoginComponent} from './auth/login/login.component';
import {AuthGuard} from './auth/auth-guard';

const routes: Routes = [
  { path: '', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'topic', component: TopicListComponent, canActivate: [AuthGuard] },
  { path: 'question', component: QuestionListComponent, canActivate: [AuthGuard] },
  { path: 'question/add/:topicId', component: QuestionAddComponent, canActivate: [AuthGuard] },
  {
    path: 'login',
    component: LoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
