import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@core/authentication/auth.service';
import { UserCourseService } from '@modules/home/services/user-course.service';
import { api_urls } from '@shared/configs/api_url';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-course',
  templateUrl: './user-course.component.html',
  styleUrls: ['./user-course.component.scss']
})
export class UserCourseComponent implements OnInit {
  id_nguoi_dung:any
  listCourseUser:any = []
  userSubs = new Subscription();
  userData: any;
  link = api_urls.LOCAL_API_URL;

  constructor(private userCourse: UserCourseService, private authService: AuthService,private router: Router) {
  }

  ngOnInit(): void {
    this.getMyCourses()
  }

  ngOnDestroy(){
    this.userSubs.unsubscribe()
  }

  getUserData(){
    let userSub = this.authService.UserObservable.subscribe((res:any)=>{
      this.userData = res
      //get my courses
      // this.getMyCourses()
    })
    this.userSubs.add(userSub);
  }

  getMyCourses(){
    this.userCourse.getListCourse().subscribe((res)=>{
      this.listCourseUser=res.data
    })
  }

  goToDetail(id:string) {
    console.log(id)
    this.router.navigateByUrl(`/course/${id}?mode=detail`);
  }
}
