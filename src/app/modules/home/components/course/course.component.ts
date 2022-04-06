import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from '@modules/home/services/course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  like:boolean =false;
  dataSource:any

  constructor(private router: Router, private courseService: CourseService ) {

   }

  ngOnInit(): void {
    this.courseService.getClassList().subscribe((data)=> {
      this.dataSource= data

    })
  }

  goToDetail(id_mon_hoc:string) {
    this.router.navigateByUrl(`/course-detail/${id_mon_hoc}`)
  }

}
