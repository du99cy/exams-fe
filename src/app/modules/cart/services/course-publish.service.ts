import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { api_urls } from '@shared/configs/api_url';
import { map, Observable } from 'rxjs';

@Injectable()
export class CoursePublishService {
  readonly BASE_URL = `${api_urls.LOCAL_API_URL}/course`;
  constructor(private httpClient: HttpClient) {}
  get(id: string): Observable<any> {
    return this.httpClient
      .get(`${this.BASE_URL}/${id}/published`)
      .pipe(map((res: any) => res.data));
  }
}
