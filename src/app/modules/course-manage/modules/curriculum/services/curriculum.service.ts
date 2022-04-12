import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { fmt } from '@core/utilities/helpers';
import { api_urls } from '@shared/configs/api_url';
import { first, map, Observable } from 'rxjs';
import { Content } from '../models/content';

const BASE_URL = api_urls.LOCAL_API_URL;

const routes = {
  addContent: `${BASE_URL}/content`,
  getAllContentViaCourse: `${BASE_URL}/course/{course_id}/content/all`
};

@Injectable()
export class CurriculumService {
  constructor(private httpClient: HttpClient) {}

  addContent(contentBody: Content): Observable<any> {
    return this.httpClient.post(routes.addContent, contentBody).pipe(first());
  }

  getAllContentViaCourseId(course_id:string):Observable<Array<Content>> {
    let uri = fmt(routes.getAllContentViaCourse,{course_id})
    return this.httpClient.get<Content>(uri).pipe(map((res:any)=>{
      return res.status_code == 200 ? res.data : []
    }));
  }


}
