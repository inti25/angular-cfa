import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Question} from '../model/question.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private firestore: AngularFirestore) { }

  createQuestion(question: Question) {
    const id = this.firestore.createId();
    question.id = id;
    const nQuestion = Object.assign({}, question);

    return this.firestore.collection('question').doc(id).set(JSON.parse(JSON.stringify(nQuestion)));
  }

  getQuestions(topicId: string) {
    if (topicId !== undefined && topicId !== null && topicId !== '') {
      return this.firestore.collection('question',
        ref => ref.where('topicId', '==', topicId)).snapshotChanges();
    } else {
      return this.firestore.collection('question').snapshotChanges();
    }
  }

  deleteQuestion(questionId: string){
    this.firestore.doc('question/' + questionId).delete();
  }
}
