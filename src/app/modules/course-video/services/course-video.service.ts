import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { fmt, mapToHttpParamsQuery } from '@core/utilities/helpers';
import { QuestionPostOfUser } from '@modules/course-manage/modules/curriculum/models/question';
import { api_urls } from '@shared/configs/api_url';
import { first, map, Observable } from 'rxjs';

const BASE_URL = api_urls.LOCAL_API_URL;

const routes = {
  getVideo: `${BASE_URL}/resourse/{content_id}/video`,
  getQuestion: `${BASE_URL}/question/{content_id}`
};

@Injectable()
export class CourseVideoService {
  constructor(private httpClient: HttpClient) {}

  getVideoViaContentId(content_id: string,mode:string): Observable<any> {
    let uri = fmt(routes.getVideo, { content_id });
    let httpParams = mapToHttpParamsQuery({mode:mode})
    return this.httpClient.get(uri,{params:httpParams,responseType:'blob'}).pipe(first());
  }
  getQuestionByContentId(content_id: string, mode:string):Observable<any>{
    let uri = fmt(routes.getQuestion, { content_id });
    let httpParams = mapToHttpParamsQuery({mode:"preview"})
    return this.httpClient.get(uri,{params:httpParams}).pipe(first(),map((res:any)=>{
      console.log(res.data)
      return res.data

    }))
  }


}
