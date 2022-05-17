import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { api_urls } from '@shared/configs/api_url';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CheckoutService {
  readonly BASE_URL = `${api_urls.LOCAL_API_URL}/transaction`;
  constructor(private httpClient: HttpClient) {}
  checkout(idList: string[]): Observable<any> {
    return this.httpClient.post(this.BASE_URL, {
      course_id_list: idList,
    });
  }
}
