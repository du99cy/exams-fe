import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { fmt, mapToHttpParamsQuery } from '@core/utilities/helpers';
import { api_urls } from '@shared/configs/api_url';
import { first, Observable } from 'rxjs';

const BASE_URL = `${api_urls.LOCAL_API_URL}/coding`;
const routes = {
  getFunctionTemplate: `${BASE_URL}/content/{contentId}/function_template`,
  runTestcase: `${BASE_URL}/content/{contentId}/run-testcase`,
};
@Injectable()
export class CodingExamService {
  constructor(private httpClient: HttpClient) {}

  getFunctionTemplate(
    contentId: string,
    language_name: string
  ): Observable<any> {
    let uri = fmt(routes.getFunctionTemplate, { contentId });
    let params = mapToHttpParamsQuery({ language: language_name });
    return this.httpClient.get(uri, { params: params }).pipe(first());
  }

  runTestcase(
    contentId: string,
    language_name: string,
    scripts: string
  ): Observable<any> {
    let uri = fmt(routes.runTestcase, { contentId });
    let queryParams = mapToHttpParamsQuery({
      language_program_name: language_name,
    });
    return this.httpClient
      .post(uri, scripts, { params: queryParams })
      .pipe(first());
  }
}
