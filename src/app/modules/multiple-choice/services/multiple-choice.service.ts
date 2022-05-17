import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { fmt } from '@core/utilities/helpers';
import { QuestionPostOfUser } from '@modules/course-manage/modules/curriculum/models/question';
import { api_urls } from '@shared/configs/api_url';
import { first, map } from 'rxjs';

const BASE_URL = `${api_urls.LOCAL_API_URL}/question`
const routes = {
  postMultipleChoiceExam:`${BASE_URL}/multi-choice-exam/{contentId}`
}
@Injectable()
export class MultipleChoiceService {

  constructor(private httpClient: HttpClient) { }

  postMultipleChoiceExam(contentId: string,questions:Array<any>){
    let uri = fmt(routes.postMultipleChoiceExam,{contentId})
    return this.httpClient.post(uri,questions).pipe(first(),map((res:any)=>res.data))

  }

}
