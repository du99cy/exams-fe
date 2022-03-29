import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';

import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { UserSignUp } from '@modules/sign-up/models/userSignUp';
import { SignUpService } from '@modules/sign-up/servives/sign-up.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  providers: [SignUpService]
})
export class SignUpComponent implements OnInit {
  email_is_sent:boolean = false;
  is_error:boolean = false;
  error_message:string =""

  ValidationsMessages: { [key: string]: any } = {
    firstName: 'Yêu cầu First Name',
    lastName: 'Yêu cầu Last name',
    email: {
      required: 'Yêu cầu Email',
      invalid: 'Email chưa đúng định dạng',
    },
    password: {
      required: 'Yêu cầu Password',
      invalid: 'Password chưa đủ mạnh ',
    },
    confirmPassword: {
      required: 'Yêu cầu Confirm Password',
      mismatch: 'Password và Confirm Password không trùng nhau',
    },
  };

  loading: boolean = false;

  signUpAttributes = {
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern('(?=\\D*\\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}')

    ]),
    confirmPassword: new FormControl('', [
      Validators.required,
      Validators.pattern('(?=\\D*\\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}'),

    ]),
  };

  showDetails: boolean = true;

  signUpFormGroup: FormGroup;
  constructor(fb: FormBuilder,private singUpService:SignUpService) {
    this.signUpFormGroup = fb.group(this.signUpAttributes);
  }

  ngOnInit(): void {}

  get singUpFormValue(){
    return this.signUpFormGroup.value
  }

  parseUserData(userDataObject:any):UserSignUp
  {
    return {first_name:userDataObject.firstName, last_name:userDataObject.lastName, email:userDataObject.email, password:userDataObject.password}
  }

  signUp() {

    if(this.singUpFormValue.password !== this.singUpFormValue.confirmPassword){

      this.is_error = true;
      this.error_message = "Mật khẩu và xác thực mật khẩu chưa trùng nhau"
      return
    }

    this.loading = true;

    if(this.signUpFormGroup.valid)
    {
      //parse data
      let userDataModel = this.parseUserData(this.singUpFormValue)
      //send user data

      this.singUpService.signUp(userDataModel).subscribe(res=>{

        this.email_is_sent  = res.status_code == 200 ? true : false;
        this.loading = false;
      },
      (err:HttpErrorResponse)=>{

      })
    }

  }


  retypeConfirmValidator(new_password: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null=> {
      if (!control || !control.parent) return null;

      return control.parent.get(new_password)?.value === control.value
        ? null
        : { mismatch: true };
    };
  }
  // isError(formControlName:string,validator_name:string) {
  //   return this.signUpFormGroup.get(formControlName)?.errors
  // }

  isError(formControlName: string, validator_name: string) {
    return (this.signUpFormGroup.get(formControlName)?.errors as any)[
      validator_name
    ];
  }


}
