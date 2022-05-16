import { query } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '@core/authentication/user';
import { scrollToTopPage } from '@core/utilities/helpers';
import { CourseDetailService } from '@modules/course-detail/services/course-detail.service';
import { RegisterCourseService } from '@modules/course-detail/services/register-course.service';
import { Content } from '@modules/course-manage/modules/curriculum/models/content';
import { CourseService } from '@modules/home/services/course.service';
import { Course } from '@modules/new-course-creation/models/course';
import { api_urls } from '@shared/configs/api_url';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss'],
})
export class CourseDetailComponent implements OnInit {
  router: any;
  courses: any;
  courseId: string;
  course: Course;
  instructor: User;
  contents: Array<Content>;
  panelOpenState = false;
  listTopic: any;
  listTopicUser: any;
  link = api_urls.LOCAL_API_URL
  openRegister = true;

  button_dis: any;

  // buttons_data:any = {
  //   no_registration: {
  //     name: 'Đăng kí',
  //     event: () => {
  //       this.register();
  //     },
  //   },
  //   registrated: {
  //     name: 'Tham gia',
  //     event: () => {
  //       alert("chức năng hoàn thiện sau !!!")
  //     },
  //   },
  //   not_accept: {
  //     name: 'Chờ phê duyệt',
  //     event: () => {},
  //   },
  // };
  constructor(
    private activateRoute: ActivatedRoute,
    private courseService: CourseService,
    private registerCourse: RegisterCourseService,
    private courseDetailService: CourseDetailService
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


      let data = res?.data
      console.log(data)
      if(res?.data_name == "course")
        this.course = data

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
}
