import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '@core/authentication/auth.service';
import { User } from '@core/authentication/user';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { CartService } from '@modules/home/services/cart.service';
import { api_urls } from '@shared/configs/api_url';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit,OnDestroy {
  cartItem:number
  userData:any
  userSubs = new Subscription();
  openSetting = false
  link = api_urls.LOCAL_API_URL
  constructor(private authService: AuthService,private router: Router, private cartService: CartService) { }

  ngOnInit(): void {
    this.cartItem = this.cartService.Cart?.length || 0;
    this.cartService.refresh$.subscribe((res)=> {
     console.log('eee',res)
      this.cartItem = this.cartService.Cart?.length || 0;
    })
    this.getUserData();
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
  logOutUser(){
    this.authService.logout()
    this.router.navigateByUrl(`/`)
  }


}
