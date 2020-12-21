import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

import {Topic} from '../model/topic.model';

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  constructor(private firestore: AngularFirestore) { }

  getTopics() {
    return this.firestore.collection('topic').snapshotChanges();
  }

  createTopic(topic: Topic) {
    const id = this.firestore.createId();
    topic.id = id;
    let nTopic = Object.assign({}, topic);
    return this.firestore.collection('topic').doc(id).set(nTopic);
  }

  updateTopic(topic: Topic){
    delete topic.id;
    this.firestore.doc('topic/' + topic.id).update(topic);
  }

  deleteTopic(topicId: string){
    this.firestore.doc('topic/' + topicId).delete();
  }
}
