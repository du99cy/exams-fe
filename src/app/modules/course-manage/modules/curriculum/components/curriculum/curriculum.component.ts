import {
  CdkDrag,
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '@modules/new-course-creation/models/course';

import { CourseCreationService } from '@modules/new-course-creation/services/course-creation.service';
import { map, Observable } from 'rxjs';
import { Content } from '../../models/content';
import { CurriculumService } from '../../services/curriculum.service';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.scss'],
})
export class CurriculumComponent implements OnInit, OnDestroy {

  ContentListObservable: Observable<Array<Content>>;
  course_id: string;
  description: string
  BtnsMenuOpen = false;
  lectureCreationOpen = false;
  quizCreationOpen = false;
  orderContentChange = false;
  contentListTrace: Array<Content> = [];
  content:any = {type:'',creation_title:''}


  drop(
    event: CdkDragDrop<{ title: string; poster: string }[]>,
    dataList: Array<Content>
  ) {
    this.orderContentChange = true;
    moveItemInArray(dataList, event.previousIndex, event.currentIndex);
    //trace data list
    this.contentListTrace = dataList;
  }

  lectureCreationClickEvent(event: any) {
    if (event.status == 1) {

      //create content insert
      let content: Content = {
        title: event.data,
        type_status: 1,
        course_id: this.course_id,
      };
      //add content to database
      this.addContent(content);
      //close menu and content creation form
      this.lectureCreationOpen = false;
    }
    //close menu and content creation form
    this.lectureCreationOpen = false;
  }

  quizCreationClickEvent(event: any) {

    if(event.status === 1){
      let content:Content = {
        title:event.data.title,
        description:event.data.description,
        type_status:this.content.type,
        course_id:this.course_id,
        time_for_quiz_minutes:event.data.timeForQuiz

      }

      this.addContent(content)
    }

    this.quizCreationOpen = false
  }


  constructor(
    private route: ActivatedRoute,
    private curriculumService: CurriculumService,
    private courseService: CourseCreationService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.route.parent.parent.params.subscribe((params) => {
      this.course_id = params['newCourseId'];
      //get all content via course id
      this.ContentListObservable =
        this.curriculumService.getAllContentViaCourseId(this.course_id);
    });
  }
  ngOnDestroy() {
    //if change then update to database
    if (this.orderContentChange) {
      let contentIdOrderUpdate = this.contentListTrace.map(
        (content: Content) => content.id
      );
      //parse to course model
      let courseModel: Course = {
        order_contents: contentIdOrderUpdate,
      };
      //update to database
      this.courseService.updateCourse(this.course_id, courseModel).subscribe();
    }
  }

  addContent(contentBody: Content) {
    this.curriculumService.addContent(contentBody).subscribe((res) => {
      //get content list
      this.ContentListObservable =
        this.curriculumService.getAllContentViaCourseId(this.course_id);
    });
  }

  trackByFn(index: number, item: any) {
    return item.id;
  }

  preview() {
    this.router.navigateByUrl(`course/${this.course_id}/contents?mode=preview`);
  }
}
