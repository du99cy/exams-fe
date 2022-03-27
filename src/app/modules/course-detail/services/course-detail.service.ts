import { Injectable } from '@angular/core';
import { environment } from '@environment/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseDetailService {
  url = `${environment.apiUrl}/nguoithamgialop/class-registration`;
  Course: any;
  constructor(private http: HttpClient) {}
  private _refresh$ = new Subject<void>();

  get refresh$() {
    return this._refresh$;
  }
  // getTopicByClassId(_id:any):Observable<any>{
  //   return this.http.get<any>(`${this.url}/ma_lop?ma_lop_hoc=${_id}`)
  // }
}