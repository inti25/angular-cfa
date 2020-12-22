import {Answer} from './answer.model';

export class Question {
  id: string;
  text: string;
  topicId: string;
  answers: Answer[];

 addAnswer(answer: Answer): void {
   if (this.answers === undefined) {
     this.answers = [];
   }
   this.answers.push(Object.assign({}, answer));
  }
}
