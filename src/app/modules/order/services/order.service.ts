import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { api_urls } from "@shared/configs/api_url";
import { Observable } from "rxjs";

@Injectable()
export class OrderService{
  readonly BASE_URL = `${api_urls.LOCAL_API_URL}/transaction`;
  constructor(private httpClient: HttpClient){}
  getOrder(): Observable<any>{
    return this.httpClient.get(this.BASE_URL)
  }
}
