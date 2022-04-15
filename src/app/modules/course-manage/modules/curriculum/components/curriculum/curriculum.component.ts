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
  BtnsMenuOpen = false;
  lectureCreationOpen = false;
  quizCreationOpen = false;
  orderContentChange = false;
  contentListTrace: Array<Content> = [];

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
      let title = event.data;
      //create content insert
      let content: Content = {
        title: title,
        type_status: 0,
        course_id: this.course_id,
      };

      this.addContent(content).subscribe((res) => {
        //close menu and content creation form
        this.lectureCreationOpen = false;
        //get content list
        this.ContentListObservable =
          this.curriculumService.getAllContentViaCourseId(this.course_id);
      });
    }
    //close menu and content creation form
    else this.lectureCreationOpen = false;
  }

  constructor(
    private route: ActivatedRoute,
    private curriculumService: CurriculumService,
    private courseService: CourseCreationService,
    private router:Router
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
    return this.curriculumService.addContent(contentBody);
  }

  trackByFn(index: number, item: any) {
    return item.id;
  }

  preview(){
    this.router.navigateByUrl(`course/${this.course_id}/contents?mode=preview`)
  }
}
