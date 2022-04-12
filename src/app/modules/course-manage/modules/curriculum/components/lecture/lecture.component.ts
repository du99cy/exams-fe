import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lecture',
  templateUrl: './lecture.component.html',
  styleUrls: ['./lecture.component.scss']
})
export class LectureComponent implements OnInit {

  @Input('order') order :number = 0;
  @Input('title') title :string = 'Introduction';
  @Input('lecture-id')lecture_id:string = ''

  expandMorePress:boolean = false;
  videoUploadPress:boolean = false;
  descriptionUploadPress:boolean = false;
  resourseUploadPress:boolean = false;

  constructor() { }

  ngOnInit() {

  }


  editorClickHandler(event:any):void {
    this.descriptionUploadPress = false;
  }

}
