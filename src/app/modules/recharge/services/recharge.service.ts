import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { api_urls } from "@shared/configs/api_url";
import { Observable } from "rxjs";
import { IPayment } from "../models/interface";

@Injectable()
export class RechargeService{
  readonly BASE_URL = `${api_urls.LOCAL_API_URL}/recharge`;
  constructor(private httpClient: HttpClient) {}
  recharge(body: IPayment): Observable<any> {
    return this.httpClient.post(this.BASE_URL, body);
  }
  saveMoney(params: any) {
    return this.httpClient.post(`${this.BASE_URL}/ipn`, params);
  }
}
