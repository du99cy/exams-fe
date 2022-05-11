import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { api_urls } from '@shared/configs/api_url';
import { Observable } from 'rxjs';
import { IPayment } from '../models/interface';

@Injectable({
  providedIn: 'root',
})
export class CheckoutService {
  BASE_URL = `${api_urls.LOCAL_API_URL}/order`;
  constructor(private httpClient: HttpClient) {}
  redirectToPayment(body: IPayment): Observable<any> {
    return this.httpClient.post(this.BASE_URL, body);
  }
}
