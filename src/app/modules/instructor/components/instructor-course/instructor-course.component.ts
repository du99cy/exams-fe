import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InstructorService } from '@modules/instructor/instructor.service';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-instructor-course',
  templateUrl: './instructor-course.component.html',
  styleUrls: ['./instructor-course.component.scss'],
  providers: [InstructorService]
})
export class InstructorCourseComponent implements OnInit {
  CourseObs:Observable<any>

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private instructorService: InstructorService
  ) {}

  ngOnInit(): void {
    this.CourseObs = this.getCourseAll()
  }

  createNewCourse() {
    let newCourseId = Date.now();
    this.router.navigate([`./${newCourseId}/course-creation`], {
      relativeTo: this.route,
    });
  }

  getCourseAll(): Observable<any> {
    return this.instructorService.getCourseAll().pipe(map(res=>{
      return res.data;
    }))
  }

  navigateToManagePage(course_id:string){
    this.router.navigate([`./${course_id}/manage`],{relativeTo:this.route})
  }
}
