import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { api_urls } from "@shared/configs/api_url";
import { Observable } from "rxjs";

@Injectable()
export class TransactionService{
  readonly BASE_URL = `${api_urls.LOCAL_API_URL}/recharge`;
  constructor(private httpClient: HttpClient){}
  getTransactions():Observable<any>{
    return this.httpClient.get<any>(this.BASE_URL);
  }
}
