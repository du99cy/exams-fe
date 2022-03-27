import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@core/authentication/auth.service';
import { UserCourseService } from '@modules/home/services/user-course.service';
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
  constructor(private userCourse: UserCourseService, private authService: AuthService,private router: Router) { 
  }
  ngOnInit(): void {
    this.getUserData()
    this.userCourse.getListCourseByUserId(this.userData._id).subscribe((data)=>{
      this.listCourseUser =data
      console.log(this.listCourseUser)
    })
  }
  ngOnDestroy(){
    this.userSubs.unsubscribe()
  }
  getUserData(){
    let userSub = this.authService.UserObservable.subscribe((res:any)=>{
      this.userData = res
      console.log(res)
    })
    this.userSubs.add(userSub);
  }
  goToDetail(id_mon_hoc:string) {
    this.router.navigateByUrl(`/course-detail?id_mon_hoc=${id_mon_hoc}`)
  }
}