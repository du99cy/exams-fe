import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '@modules/course/services/course.service';
import { Course } from '@modules/new-course-creation/models/course';

import { CourseCreationService } from '@modules/new-course-creation/services/course-creation.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  providers: [CourseCreationService],
})
export class LayoutComponent implements OnInit {

  course_id: string;
  courseFormGroup: FormGroup;
  courseFormAttributes = {
    title: new FormControl('', [Validators.required]),
    category: new FormControl(''),
  };
  course_categories = [];

  constructor(
    formBuilder: FormBuilder,
    private courseService: CourseCreationService,
    private route: ActivatedRoute,
    private coursesService: CourseService,
    private router: Router
  ) {
    this.courseFormGroup = formBuilder.group(this.courseFormAttributes);
  }

  get CourseFormValue() {
    return this.courseFormGroup.value;
  }
  saveCourse() {
    this.courseService
      .addNewCourse(<Course>{
        ...this.CourseFormValue,
        id: this.course_id,
      })
      .subscribe(
        (res) => {
          this.router.navigate(['../manage'],{relativeTo:this.route})
        },
        (err: HttpErrorResponse) => {
          alert(err.error.detail);
        }
      );
  }
  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      this.course_id = params['newCourseId'];
    });
    this.coursesService.getCategories().subscribe(res=> {
      this.course_categories =res
    })
  }
}
