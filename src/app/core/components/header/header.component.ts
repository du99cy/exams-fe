import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '@core/authentication/auth.service';
import { User } from '@core/authentication/user';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit,OnDestroy {

  userData:any
  userSubs = new Subscription();
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.getUserData()
  }

  ngOnDestroy(){
    this.userSubs.unsubscribe()
  }

  getUserData(){
    let userSub = this.authService.UserObservable.subscribe((res:any)=>{
      this.userData = res

    })
    this.userSubs.add(userSub);
  }

}
