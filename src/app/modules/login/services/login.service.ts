import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { fmt } from "@core/utilities/helpers";
import {api_urls} from '@shared/configs/api_url'
import { first, Observable } from "rxjs";
const BASE_URL = api_urls.LOCAL_API_URL
const routes = {
  forgotPassword:`${BASE_URL}/auth/forgot-password/{email_text}`
}
@Injectable()
export class LoginService{
  constructor(private httpClient: HttpClient){}

  forgotPassword(email_text:string):Observable<any>{
    const uri = fmt(routes.forgotPassword,{email_text})
    return this.httpClient.get<any>(uri).pipe(first())
  }


}
