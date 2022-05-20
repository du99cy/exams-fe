import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ChangePass } from '@modules/change-pass/models/change-pass';
import { ChangePassService } from '@modules/change-pass/services/change-pass.service';
import { UserSignUp } from '@modules/sign-up/models/userSignUp';


@Component({
  selector: 'app-change-pas',
  templateUrl: './change-pas.component.html',
  styleUrls: ['./change-pas.component.scss'],
  providers:[ChangePassService]
})
export class ChangePassComponent implements OnInit {
  email_is_sent:boolean = false;
  is_error:boolean = false;
  error_message:string =""

  ValidationsMessages: { [key: string]: any } = {
   
    old_password: {
      required: 'Yêu cầu Email',
      invalid: 'Email chưa đúng định dạng',
    },
    new_password: {
      required: 'Yêu cầu Password',
      invalid: 'Password chưa đủ mạnh ',
    },
  };

  loading: boolean = false;

  changePassAttributes = {
    old_password: new FormControl('', [
      Validators.required,
      // Validators.pattern('(?=\\D*\\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}')
    ]),
    new_password: new FormControl('', [
      Validators.required,
      // Validators.pattern('(?=\\D*\\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}')

    ]),
  };

  showDetails: boolean = true;

  changePassFormGroup: FormGroup;
  constructor(fb: FormBuilder,private changePassService:ChangePassService) {
    this.changePassFormGroup = fb.group(this.changePassAttributes);
  }

  ngOnInit(): void {}

  get changePassFormValue(){
    return this.changePassFormGroup.value
  }

  parseUserData(userDataObject:any):ChangePass
  {
    return {old_password:userDataObject.old_password, new_password:userDataObject.new_password}
  }

  changePass() {

    if(this.changePassFormGroup.valid)
    {
      //parse data
      let userDataModel = this.parseUserData(this.changePassFormValue)
      //send user data

      this.changePassService.signUp(userDataModel).subscribe(res=>{
        alert("Đổi mật khẩu thành công")
      })
    }

  }
}
