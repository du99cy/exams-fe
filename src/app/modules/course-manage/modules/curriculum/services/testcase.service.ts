import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { fmt } from '@core/utilities/helpers';
import { api_urls } from '@shared/configs/api_url';
import { first, map, Observable } from 'rxjs';
import { TestCase } from '../models/testcase';

const BASE_URL = `${api_urls.LOCAL_API_URL}/testcase`;

const routes = {
  addTestcase: `${BASE_URL}`,
  getAllTestcaseViaContentId: `${BASE_URL}/{content_id}/all`
};

@Injectable()
export class TestcaseService {
  constructor(private httpClient: HttpClient) {}

  addTestcase(testcase: TestCase): Observable<any> {
    return this.httpClient.post(routes.addTestcase, testcase).pipe(first());
  }

  getAllTestcaseViaContentId(content_id:string): Observable<any> {
    let uri = fmt(routes.getAllTestcaseViaContentId,{content_id})
    return this.httpClient.get(uri).pipe(first(),map((res:any)=>{
      console.log(res)
      return res.data
    }))
  }
}
