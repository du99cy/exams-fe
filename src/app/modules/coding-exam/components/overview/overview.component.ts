import { Component, Input, OnInit } from '@angular/core';
import { Content } from '@modules/course-manage/modules/curriculum/models/content';
import { Function } from '@modules/course-manage/modules/curriculum/models/function';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  @Input("content") content :Content
  @Input('function') function:Function
  constructor() { }

  ngOnInit() {

  }

}
