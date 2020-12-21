import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TopicListComponent} from './views/topic-list/topic-list.component';

const routes: Routes = [
  { path: 'topic', component: TopicListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
