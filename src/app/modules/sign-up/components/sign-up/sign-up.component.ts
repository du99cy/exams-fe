import { Component, OnInit } from '@angular/core';
import { FormControl, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  loading:boolean = false;
  signUpAttributes = {
    fullname:new FormControl('', [Validators.required]),
    email:new FormControl('', [Validators.required,Validators.pattern('/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/')]),
    password:new FormControl('', [Validators.required,Validators.min(8)]),

  }

  showDetails: boolean = true;
  constructor() {

   }

  ngOnInit(): void {
  }

  signUp(){
    this.loading = true
  }


}




