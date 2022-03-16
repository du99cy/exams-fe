import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {} from '@core/utilities/helpers'
import { Observable } from 'rxjs';
import { UserSignUp } from '../models/userSignUp';
const route = {
  sign_up:`/auth/sign-up`
}

@Injectable()
export class SignUpService {

  constructor(private httpClient:HttpClient) { }

  signUp(userData:UserSignUp):Observable<any>
  {
    return this.httpClient.post<any>(route.sign_up, userData)
  }

}
