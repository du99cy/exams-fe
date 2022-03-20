import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {} from '@core/utilities/helpers'
import { first, Observable } from 'rxjs';
import { UserSignUp } from '../models/userSignUp';
import {api_urls} from '@shared/configs/api_url'
const BASE_URL = api_urls.LOCAL_API_URL
const route = {
  sign_up:`${BASE_URL}/auth/sign-up`
}

@Injectable()
export class SignUpService {

  constructor(private httpClient:HttpClient) { }

  signUp(userData:UserSignUp):Observable<any>
  {
    return this.httpClient.post<any>(route.sign_up, userData).pipe(first())
  }

}
