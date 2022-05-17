import { Injectable } from '@angular/core';
import { environment } from '@environment/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { api_urls } from '@shared/configs/api_url';

@Injectable({
  providedIn: 'root'
})
export class UserCourseService {
  url = `${api_urls.LOCAL_API_URL}/course/courses/me`;
  Course: any;
  constructor(private http: HttpClient) {}
  getListCourse():Observable<any>{
    return this.http.get<any>(`${this.url}`);
  }

}
