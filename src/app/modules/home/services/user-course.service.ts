import { Injectable } from '@angular/core';
import { environment } from '@environment/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserCourseService {
  url = `${environment.apiUrl}/nguoithamgialop/ListLop`;
  Course: any;
  constructor(private http: HttpClient) {}
  private _refresh$ = new Subject<void>();

  get refresh$() {
    return this._refresh$;
  }
  getListCourseByUserId(id_nguoi_dung:any):Observable<any>{
    return this.http.get<any>(`${this.url}?id_nguoi_dung=${id_nguoi_dung}`);
  }

}
