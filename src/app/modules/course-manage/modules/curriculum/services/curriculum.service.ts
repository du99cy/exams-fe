import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { fmt, mapToFormData } from '@core/utilities/helpers';
import { api_urls } from '@shared/configs/api_url';
import { first, map, Observable } from 'rxjs';
import { Content } from '../models/content';
import { ResourseFile } from '../models/ResourseFile';

const BASE_URL = api_urls.LOCAL_API_URL;

const routes = {
  addContent: `${BASE_URL}/content`,
  getAllContentViaCourse: `${BASE_URL}/course/{course_id}/content/all`,
  uploadFile: `${BASE_URL}/resourse/uploadFile`,
  addResourse: `${BASE_URL}/resourse`,
  updateContent: `${BASE_URL}/content/{content_id}`,
  getAllResourseViaContentId: `${BASE_URL}/content/{content_id}/resourses`,
};

@Injectable()
export class CurriculumService {
  constructor(private httpClient: HttpClient) {}

  addContent(contentBody: Content): Observable<any> {
    return this.httpClient.post(routes.addContent, contentBody).pipe(first());
  }

  getAllContentViaCourseId(course_id: string): Observable<Array<Content>> {
    let uri = fmt(routes.getAllContentViaCourse, { course_id });
    return this.httpClient.get<Content>(uri).pipe(
      map((res: any) => {
        return res.status_code == 200 ? res.data : [];
      })
    );
  }

  uploadFile(file: File): Observable<any> {
    let formData = mapToFormData({ file: file });
    return this.httpClient.post<any>(routes.uploadFile, formData).pipe(first());
  }

  addResourse(resourseBody: ResourseFile): Observable<any> {
    return this.httpClient.post(routes.addResourse, resourseBody).pipe(first());
  }

  updateContent(
    content_id: string,
    contentBodyUpdate: Content
  ): Observable<any> {
    let uri = fmt(routes.updateContent, { content_id });
    return this.httpClient.patch(uri, contentBodyUpdate).pipe(first());
  }

  getAllResourseViaContentId(content_id: string): Observable<any> {
    let uri = fmt(routes.getAllResourseViaContentId, { content_id });
    return this.httpClient.get(uri).pipe(map((res:any)=>{

      return res.status_code == 200?res.data:[]
    }),first());
  }
}
