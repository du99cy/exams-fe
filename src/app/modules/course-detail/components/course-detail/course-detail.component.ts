import { query } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { scrollToTopPage } from '@core/utilities/helpers';
import { CourseDetailService } from '@modules/course-detail/services/course-detail.service';
import { RegisterCourseService } from '@modules/course-detail/services/register-course.service';
import { CourseService } from '@modules/home/services/course.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss'],
})
export class CourseDetailComponent implements OnInit {
  router: any;
  courses: any;
  panelOpenState = false;
  listTopic: any;
  listTopicUser: any;
  openRegister = true;
  constructor(
    private activateRoute: ActivatedRoute,
    private courseService: CourseService,
    private registerCourse: RegisterCourseService,
    private courseDetailService: CourseDetailService
  ) {}

  ngOnInit(): void {
    //scroll to top page
    scrollToTopPage()
    this.activateRoute.params.subscribe((queryParams) => {
      this.courseService
        .getClassById(queryParams['subject_id'])
        .subscribe((data) => {
          this.courses = data;
          this.courseService
            .getTopicByClassId(this.courses[0]._id)
            .subscribe((topics) => {
              console.log(topics);
              this.listTopic = topics.data;
            });
        });
    });
  }

  convertHttps(str_: any) {
    return str_.replace(
      'http://45.77.245.61:6868',
      'https://course.aiacademy.edu.vn/images'
    );
  }
  register() {
    this.registerCourse
      .registerCourse(this.courses[0]._id)
      .subscribe((course) => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Bạn đã đăng kí thành công khóa học',
          showConfirmButton: false,
          timer: 1500,
        });
        this.openRegister = false;
      });
  }
}
