import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  isLoading:boolean = false;
  loginError:boolean = false;

  social_btns: Array<{
    icon_path: string;
    title: string;
  }> = [
    {
      icon_path: '../../../../../assets/common-img/facebook-icon.jpg',
      title: 'Đăng nhập với tài khoản Facebook',
    },
    {
      icon_path: '../../../../../assets/common-img/google-icon.png',
      title: 'Đăng nhập với tài khoản Google',
    },
  ];

  loginAttributes = {
    username: new FormControl('', Validators.compose([Validators.required])),
    password: new FormControl('', Validators.compose([Validators.required])),
  };

  loginForm: FormGroup;

  constructor(formBuilder: FormBuilder) {
    this.loginForm = formBuilder.group(this.loginAttributes);
  }

  ngOnInit(): void {}

  login(){
    this.isLoading = true;
  }

}
