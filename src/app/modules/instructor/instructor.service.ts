import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { api_urls } from '@shared/configs/api_url';
import { Observable } from 'rxjs';

const BASE_URL = api_urls.LOCAL_API_URL
const routes = {
  getAllCourses:`${BASE_URL}/course/all`
}

@Injectable()
export class InstructorService {

  constructor(private httpClient:HttpClient) { }

  getCourseAll():Observable<any>{
    return this.httpClient.get(routes.getAllCourses)
  }




}
