import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { fmt } from "@core/utilities/helpers";
import { first, Observable } from "rxjs";
import {api_urls} from '@shared/configs/api_url'
const BASE_URL = api_urls.LOCAL_API_URL

const routes = {
  confirmToken:`${BASE_URL}/auth/confirm-token/{token}`
}

@Injectable()
export class ConfirmTokenService {
  constructor(private httpClient: HttpClient){}

  confirmToken(token:string):Observable<any>{
    const uri = fmt(routes.confirmToken,{token});
    return this.httpClient.get(uri).pipe(first())
  }

}
