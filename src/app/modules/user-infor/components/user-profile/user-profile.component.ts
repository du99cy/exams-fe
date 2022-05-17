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

  ngOnInit(): void {
    this.formGroup = this.fb.group(this.attributes);
    this.userData = this.authService.User
    this.formGroup.patchValue(this.userData)
  }

  get FormValue() {
    return this.formGroup.value;
  }
  updateData(){
    let userBodyUpdate: User = { ...this.FormValue };
      this.authService
        .updateUser(userBodyUpdate)
        .subscribe(res=>{
          this.userData = {...this.userData,...userBodyUpdate}
          this.authService.User = this.userData
          alert("Cập nhật thành công")
        });
  }
}
