import { query } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '@modules/home/services/course.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss']
})
export class CourseDetailComponent implements OnInit {
  router: any;
  courses:any;
  panelOpenState = false;
  listTopic:any;

  constructor(private activateRoute: ActivatedRoute, private courseService: CourseService) { }

  ngOnInit(): void {
    this.activateRoute.queryParams.subscribe((queryParams)=>{
      this.courseService.getClassById(queryParams['id_mon_hoc']).subscribe((data)=> {
        this.courses=data
        this.courseService.getTopicByClassId(this.courses[0]._id).subscribe((topics)=>{
          this.listTopic = topics
          console.log(this.listTopic)
        })
      })
    })
    
  }
  
}


