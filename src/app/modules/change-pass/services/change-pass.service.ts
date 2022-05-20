import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { api_urls } from '@shared/configs/api_url';
import { first, Observable } from 'rxjs';
import { ChangePass } from '../models/change-pass';
const BASE_URL = api_urls.LOCAL_API_URL
const route = {
  change_pass:`${BASE_URL}/auth/changing-password`
}
@Injectable({
  providedIn: 'root'
})

export class ChangePassService {

  constructor(private httpClient:HttpClient) { }
  signUp(userData:ChangePass):Observable<any>
  {
    return this.httpClient.post<any>(route.change_pass, userData).pipe(first())
  }
}
