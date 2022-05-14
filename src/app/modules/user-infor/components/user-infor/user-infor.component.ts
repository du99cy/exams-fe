import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '@core/authentication/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-infor',
  templateUrl: './user-infor.component.html',
  styleUrls: ['./user-infor.component.scss']
})
export class UserInforComponent implements OnInit {
  userData:any
  userSubs = new Subscription();
  constructor(private authService: AuthService ) {
    
   }

  ngOnInit(): void {
    this. getUserData()
  }
  getUserData(){
    let userSub = this.authService.UserObservable.subscribe((res:any)=>{
      this.userData = res
      console.log(this.userData)

    })
    this.userSubs.add(userSub);
  }
}
