import { Injectable } from '@angular/core';
import { environment } from '@environment/environment';
import { HttpClient } from '@angular/common/http';
import { map, Observable, Subject, tap } from 'rxjs';
import { api_urls } from '@shared/configs/api_url';

@Injectable({
  providedIn: 'root'
})
export class CourseDetailService {
  url = `${api_urls.LOCAL_API_URL}/course-rating`;
  Course: any;
  constructor(private http: HttpClient) {}
  private _refresh$ = new Subject<void>();

  get refresh$() {
    return this._refresh$;
  }
  
  courseRating(body:any){
    return this.http.post(this.url,body)
  }
  getRating(course_id:string){
    return this.http.get(`${this.url}/course/${course_id}/rating-all`).pipe(map((res:any)=>res.data))
  }
}
