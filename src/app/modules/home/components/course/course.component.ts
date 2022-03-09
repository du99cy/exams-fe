import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  like:boolean =true;
  constructor(private router: Router) {

   }

  ngOnInit(): void {
  }
  goToDetail() {
    this.router.navigateByUrl(`/course-detail`)
  }
}
