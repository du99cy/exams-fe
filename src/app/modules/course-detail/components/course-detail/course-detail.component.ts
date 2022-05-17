import { query } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '@core/authentication/user';
import { scrollToTopPage } from '@core/utilities/helpers';
import { CourseDetailService } from '@modules/course-detail/services/course-detail.service';
import { RegisterCourseService } from '@modules/course-detail/services/register-course.service';
import { Content } from '@modules/course-manage/modules/curriculum/models/content';
import { CourseService } from '@modules/home/services/course.service';
import { Course } from '@modules/new-course-creation/models/course';
import { CourseCreationService } from '@modules/new-course-creation/services/course-creation.service';
import { api_urls } from '@shared/configs/api_url';
import Swal from 'sweetalert2';
import { RatingDialogComponent } from '../rating-dialog/rating-dialog.component';
@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss'],
  providers: [CourseCreationService],
})
export class CourseDetailComponent implements OnInit {
  courses: any;
  courseId: string;
  course: Course;
  instructor: User;
  contents: Array<Content>;
  panelOpenState = false;
  listTopic: any;
  listTopicUser: any;
  link = api_urls.LOCAL_API_URL;
  openRegister = true;
  paramMode: string;
  button_dis: any;
  is_published: boolean;
  rating: any;

  buttons_data: any = {
    published: {
      name: 'Xuất bản',
      event: () => {
        this.publicThisCourse();
      },
    },
    join: {
      name: 'Tham gia',
      event: () => {
        this.router.navigate(['./contents'], {
          relativeTo: this.activateRoute,
        });
      },
    },
  };
  //   not_accept: {
  //     name: 'Chờ phê duyệt',
  //     event: () => {},
  //   },
  // };
  constructor(
    private activateRoute: ActivatedRoute,
    private courseService: CourseService,
    private registerCourse: RegisterCourseService,
    private courseDetailService: CourseDetailService,
    private courseCreationService: CourseCreationService,
    public dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit(): void {
    //scroll to top page
    scrollToTopPage();
    this.activateRoute.params.subscribe((queryParams) => {
      this.courseId = queryParams['class_id'];
      this.getCourseDetailsSSE(this.courseId);

      // this.courseDetailService
      //   .getClassById(this.courseId)
      //   .subscribe((data) => {
      //     this.courses = data;
      //     console.log("detail",data)
      //     let course = this.courses[0];

      //     this.button_dis = this.assignBtnByStatus(course?.trang_thai_dang_ki)
      //     this.courseDetailService
      //       .getTopicByClassId(queryParams['class_id'])
      //       .subscribe((topics) => {
      //         this.listTopic = topics.data;
      //         console.log(this.listTopic)
      //       });
      //   });
    });
    this.activateRoute.queryParams.subscribe((params) => {
      let paramMode = params['mode'];

      if (paramMode == 'preview') {
        this.button_dis = this.buttons_data.published;
      } else {
        this.button_dis = this.buttons_data.join;
      }
    });
    this.courseDetailService.getRating(this.courseId).subscribe((res) => {
      this.rating = res;
      console.log(this.rating);
    });
  }

  convertHttps(str_: any) {
    return str_.replace(
      'http://45.77.245.61:6868',
      'https://course.aiacademy.edu.vn/images'
    );
  }
  // register() {
  //   this.registerCourse
  //     .registerCourse(this.courses[0]._id)
  //     .subscribe((course) => {
  //       this.button_dis = this.buttons_data.not_accept
  //       Swal.fire({
  //         position: 'center',
  //         icon: 'success',
  //         title: 'Bạn đã đăng kí thành công khóa học',
  //         showConfirmButton: false,
  //         timer: 1500,
  //       });
  //       this.openRegister = false;
  //     });
  // }

  // assignBtnByStatus(status_name: string) {
  //   if (status_name == null) return this.buttons_data.no_registration;
  //   else if (status_name == 'DONGY') return this.buttons_data.registrated;
  //   else return this.buttons_data.not_accept;
  // }

  getCourseDetailsSSE(courseId: string) {
    let source = new EventSource(
      `${api_urls.LOCAL_API_URL}/course/${this.courseId}/data-stream`
    );
    source.addEventListener('message', (message) => {
      let res = JSON.parse(message.data);
      let data = res?.data;
      console.log(data);
      if (res?.data_name == 'course') this.course = data;
      else if (res?.data_name == 'user') this.instructor = data;
      else {
        this.contents = data;
        source.close();
      }
    });
    source.addEventListener('end', function (event) {
      console.log('Handling end....');
      source.close();
    });
  }
  publicThisCourse() {
    let courseUpdate: Course = { is_published: true };
    this.courseCreationService
      .updateCourse(this.courseId, courseUpdate)
      .subscribe((publish) => {
        alert('xuất bản thành công');
      });
  }
  openDialogRating(course_id: any): void {
    const dialogRef = this.dialog.open(RatingDialogComponent, {
      width: '600px',
    });
    console.log(course_id);
    dialogRef.afterClosed().subscribe((result) => {
      if (result)
        this.courseDetailService
          .courseRating({
            course_id: course_id,
            comment: result,
            star_number: 5,
          })
          .subscribe((res) => {
            console.log(res);
          });
    });
  }
}
