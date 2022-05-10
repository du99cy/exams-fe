import { Component, Inject, InjectionToken, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { routeParamFactory } from '@core/utilities/activated-route.factories';
import { Course } from '@modules/new-course-creation/models/course';
import { CourseCreationService } from '@modules/new-course-creation/services/course-creation.service';
import { Observable } from 'rxjs';

const APP_SOME_ID = new InjectionToken<Observable<string>>("stream id of params")

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss'],
  providers:[
    {
      provide: APP_SOME_ID,
      useFactory: routeParamFactory('newCourseId'),
      deps: [ActivatedRoute],
    },
    CourseCreationService
  ]
})
export class PricingComponent implements OnInit {
  mode:string = "price"
  price:number = 0
  courseId:string = ''
  constructor(private CourseService: CourseCreationService,@Inject(APP_SOME_ID) private id$:Observable<string>) { }

  ngOnInit(): void {
    this.id$.subscribe(params => {
      this.courseId  =params
      this.getCourseInfor(this.courseId,this.mode)
    })

  }

  getCourseInfor(courseId:string,mode:string):void{
    this.CourseService.getCourseInfor(courseId,mode).subscribe(res=>{
      this.price = res.price? res.price : 0
    })
  }
  savePrice(){
    let courseBodyUpdate:Course ={price:this.price}
    this.CourseService.updateCourse(this.courseId,courseBodyUpdate).subscribe(res=>{
      alert("Lưu thành công")
    })
  }
}
