import { Component, OnInit } from '@angular/core';
import { comment } from '@modules/course-video/models/content-discussion';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  listComment: any
  answerComment:false
  constructor() {
    this.listComment=comment
   }

  ngOnInit(): void {
  }

}
