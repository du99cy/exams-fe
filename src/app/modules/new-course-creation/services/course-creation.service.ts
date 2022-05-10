import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { fmt, mapToHttpParamsQuery } from '@core/utilities/helpers';
import { api_urls } from '@shared/configs/api_url';
import { first, map, Observable } from 'rxjs';
import { Course } from '../models/course';

const BASE_URL = api_urls.LOCAL_API_URL;
const routes = {
  addNewCourse: `${BASE_URL}/course`,
  updateCourse: `${BASE_URL}/course/{course_id}`,
  getCourseInfor: `${BASE_URL}/course/{courseId}/infor`,
};

@Injectable()
export class CourseCreationService {
  constructor(private httpClient: HttpClient) {}

  addNewCourse(course_body: Course): Observable<any> {
    return this.httpClient.post(routes.addNewCourse, course_body).pipe(first());
  }

  updateCourse(course_id: string, courseBodyUpdate: Course): Observable<any> {
    let uri = fmt(routes.updateCourse, { course_id });

    return this.httpClient.patch<any>(uri, courseBodyUpdate).pipe(first());
  }

  getCourseInfor(courseId: string, mode: string = 'goals'): Observable<any> {
    let uri = fmt(routes.getCourseInfor, { courseId });
    let params = mapToHttpParamsQuery({ mode: mode });
    return this.httpClient.get(uri, { params: params }).pipe(first(),map((res:any)=>res.data));
  }
}
