import { Component, OnInit } from '@angular/core';
import {Topic} from '../../model/topic.model';
import {TopicService} from '../../service/topic.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.css']
})
export class TopicListComponent implements OnInit {

  constructor(private topicService: TopicService, private router: Router) { }

  topics: Topic[];
  topicNew: Topic;

  ngOnInit(): void {
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

  createTestTopic(): void {
    this.create(this.topicNew);
  }

  addQuestion(topicId: string): void {
    this.router.navigate(['/question/add', topicId]);
  }

  create(topic: Topic): void {
    this.topicService.createTopic(topic);
  }

  update(topic: Topic): void {
    this.topicService.updateTopic(topic);
  }

  delete(id: string): void {
    this.topicService.deleteTopic(id);
  }

}
