import { Component, OnInit } from '@angular/core';
import {Topic} from '../../model/topic.model';
import {TopicService} from '../../service/topic.service';

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.css']
})
export class TopicListComponent implements OnInit {

  constructor(private topicService: TopicService) { }

  topics: Topic[];
  topicNew: Topic;

  ngOnInit() {
    this.topicService.getTopics().subscribe(data => {
      this.topics = data.map(e => {
        return {
          id: e.payload.doc.id,
          topicName: (e.payload.doc.data() as Topic).topicName
        } as Topic;
      });
    });
    this.topicNew = new Topic();
  }

  createTestTopic() {
    this.create(this.topicNew);
  }

  create(topic: Topic) {
    this.topicService.createTopic(topic);
  }

  update(topic: Topic) {
    this.topicService.updateTopic(topic);
  }

  delete(id: string) {
    this.topicService.deleteTopic(id);
  }

}
