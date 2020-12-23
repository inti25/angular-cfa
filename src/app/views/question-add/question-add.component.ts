import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Question} from '../../model/question.model';
import {Answer} from '../../model/answer.model';
import {QuestionService} from '../../service/question.service';

@Component({
  selector: 'app-question-add',
  templateUrl: './question-add.component.html',
  styleUrls: ['./question-add.component.css']
})
export class QuestionAddComponent implements OnInit, OnDestroy {

  constructor(private route: ActivatedRoute, private questionService: QuestionService, private router: Router) { }

  topicId: string;
  questions: Question[];

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.topicId = params.topicId;
      console.log('topicId = ', params.topicId);
    });
    if (this.questions === undefined || this.questions === null) {
      this.questions = [];
    }
  }

  ngOnDestroy(): void {
  }

  addQuestion(): void {
    const q = new Question();
    q.topicId = this.topicId;
    q.text = '';
    q.answers = [];
    q.answers.push(new Answer());
    q.answers.push(new Answer());
    q.answers.push(new Answer());
    this.questions.push(q);
    console.log('addQuestion = ', this.questions.length);
  }

  async commit() {
    for (const q of this.questions) {
      await this.questionService.createQuestion(q);
    }
    this.router.navigate(['/question']);
  }

  showLog(): void {
    console.log('hungnq9', this.questions);
  }

}
