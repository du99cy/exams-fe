import { query } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RegisterCourseService } from '@modules/course-detail/services/register-course.service';
import { CourseService } from '@modules/home/services/course.service';

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

  constructor(
    private activateRoute: ActivatedRoute,
    private courseService: CourseService,
    private registerCourse: RegisterCourseService
  ) {}

  ngOnInit(): void {
    this.activateRoute.queryParams.subscribe((queryParams) => {
      this.courseService
        .getClassById(queryParams['id_mon_hoc'])
        .subscribe((data) => {
          this.courses = data;
          this.courseService
            .getTopicByClassId(this.courses[0]._id)
            .subscribe((topics) => {
              this.listTopic = topics;
            });
        });
    });
  }

  convertHttps(str_:any) {
    return str_.replace('http://45.77.245.61:6868', 'https://course.aiacademy.edu.vn/images')
  }
  register(){
      this.registerCourse.registerCourse(this.courses[0]._id).subscribe((course)=>{
        console.log(course)
      })
    }
}
