import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '@core/authentication/auth.service';
import { Subscription } from 'rxjs';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit,OnDestroy {
  isLoading: boolean = false;
  loginError: boolean = false;
  //use to redirect to returnUrl
  returnUrl:string ='/'

  routeSub:Subscription = new Subscription();

  social_btns: Array<{
    icon_path: string;
    title: string;
  }> = [
    {
      icon_path: 'assets/common-img/facebook-icon.jpg',
      title: 'Đăng nhập với tài khoản Facebook',
    },
    {
      icon_path: 'assets/common-img/google-icon.png',
      title: 'Đăng nhập với tài khoản Google',
    },
  ];

  loginAttributes = {
    username: new FormControl(
      '',
      Validators.compose([Validators.required, Validators.email])
    ),
    password: new FormControl('', Validators.compose([Validators.required])),
  };

  loginForm: FormGroup;

  constructor(
    formBuilder: FormBuilder,
    public dialog: MatDialog,
    private authService: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.loginForm = formBuilder.group(this.loginAttributes);
  }

  ngOnInit(): void {}
  ngOnDestroy(){
    this.routeSub.unsubscribe()
  }
  get loginFormValue(){
    return this.loginForm.value;
  }
  getReturnUrl(){
    let queryParamsSub = this.activatedRoute.queryParams.subscribe((queryParamsObject:any)=>{
      this.returnUrl = queryParamsObject ? queryParamsObject["returnUrl"] : this.returnUrl
    })
    this.routeSub.add(queryParamsSub)
  }

  login() {
    if (this.loginForm.valid) {
      this.isLoading = true;

      this.authService.login(this.loginFormValue).subscribe(()=>{
        this.isLoading=false
        this.router.navigateByUrl(this.returnUrl)
      });
    }
  }
  forgotPassword() {
    this.dialog.open(ForgotPasswordComponent, {
      width: '500px',
    });
  }
}
