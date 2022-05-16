import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '@core/authentication/auth.service';
import { User } from '@core/authentication/user';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  formGroup: FormGroup;
  attributes = {
    biography: new FormControl(''),
    facebook_link: new FormControl('tiếng việt'),
    first_name: new FormControl(''),
    last_name: new FormControl(''),
    twitter_link: new FormControl(''),
    website_link: new FormControl(''),
    youtube_link: new FormControl(''),
    headline: new FormControl(''),
  };
  constructor(private fb: FormBuilder, private authService: AuthService) {}
  userData: any;
  userSubs = new Subscription();
  ngOnInit(): void {
    this.formGroup = this.fb.group(this.attributes);
    this.getUserData();
  }
  getUserData() {
    let userSub = this.authService.UserObservable.subscribe((res: any) => {
      this.formGroup.patchValue({
        biography: res?.biography,
        facebook_link: res?.facebook_link,
        first_name: res?.first_name,
        last_name: res?.last_name,
        twitter_link: res?.twitter_link,
        website_link: res?.website_link,
        youtube_link: res?.youtube_link,
        headline: res?.headline,
      });
      console.log(res)
    });
    this.userSubs.add(userSub);
  }
  get FormValue() {
    return this.formGroup.value;
  }
  updateData(){
    let userBodyUpdate: User = { ...this.FormValue };
      this.authService
        .updateUser(userBodyUpdate)
        .subscribe(res=>{
          alert("Cập nhật thành công")
        });
  }
}
