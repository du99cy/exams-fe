import { Injectable } from '@angular/core';
import { environment } from '@environment/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseDetailService {
  url = `${environment.apiUrl}/class`;
  url1 =`${environment.apiUrl}/topic`
  Course: any;
  constructor(private http: HttpClient) {}
  private _refresh$ = new Subject<void>();

  get refresh$() {
    return this._refresh$;
  }
  getClassById(_id:any):Observable<any>{
    return this.http.get<any>(`${this.url}/LopHoc?id_lop_hoc=${_id}`);
  }
  getTopicByClassId(_id:any):Observable<any>{
    return this.http.get<any>(`${this.url1}/ma_lop/${_id}`)
  }
}
