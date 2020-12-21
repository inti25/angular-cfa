import { Component, OnInit } from '@angular/core';
import {QuestionService} from '../../service/question.service';
import {Question} from '../../model/question.model';
import {Answer} from '../../model/answer.model';
import {Topic} from '../../model/topic.model';
import {TopicService} from '../../service/topic.service';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {

  constructor(private questionService: QuestionService, private topicService: TopicService) { }

  questions: Question[];
  topics: Array<Topic>;

  ngOnInit(): void {

    this.topicService.getTopics().subscribe(data => {
      this.topics = data.map(e => {
        return (e.payload.doc.data() as Topic);
      });
    });

    this.questionService.getQuestions(null).subscribe(data => {
      this.questions = data.map(e => {
        console.log((e.payload.doc.data() as Question));
        return (e.payload.doc.data() as Question);
      });
    });
  }

  getTopicNameById(topicId: string): string {
    return this.topics.find(t => t.id === topicId).topicName;
  }

  createNewQ(): void {
    const q = new Question();
    q.text = 'test Q';
    q.topicId = '3yhM9w399opcHcFuRTn5';

    const a1 = new Answer();
    a1.correctReason = 'test cR';
    a1.isCorrect = true;
    a1.text = 'a1';
    const a2 = new Answer();
    a2.isCorrect = true;
    a2.text = 'a2';
    const a3 = new Answer();
    a3.isCorrect = true;
    a3.text = 'a3';

    q.addAnswer(a1);
    q.addAnswer(a2);
    q.addAnswer(a3);
    this.questionService.createQuestion(q);
  }

  delete(questionId: string): void {
    this.questionService.deleteQuestion(questionId);
  }
}
