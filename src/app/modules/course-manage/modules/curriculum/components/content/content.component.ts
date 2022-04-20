import { Component, Input, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';

import { Content } from '../../models/content';

import { CurriculumService } from '../../services/curriculum.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  @Input('order') order: number = 0;
  @Input('content') content: Content;

  DetailsObserable:Observable<any>
  expandMorePress = false;
  constructor(private curriculumService: CurriculumService) {}

  ngOnInit() {}

  openContentDetails() {
    this.DetailsObserable = this.content.type_status == 0?this.getVideoAndFileResourses():this.DetailsObserable ;
    this.expandMorePress = true;
  }

  getVideoAndFileResourses() {
    //lazy get video and file resourse
    return this.curriculumService
      .getAllResourseViaContentId(this.content.id)
  }
}
