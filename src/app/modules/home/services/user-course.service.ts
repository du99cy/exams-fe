import { Injectable } from '@angular/core';
import { environment } from '@environment/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  url = `${environment.apiUrl}/nguoithamgialop`;
  Course: any;
  constructor(private http: HttpClient) {}
  private _refresh$ = new Subject<void>();

  get refresh$() {
    return this._refresh$;
  }
  getClassList():Observable<any>{
    return this.http.get<any>(`${this.url}/ListMon`);
  }
  getClassById(id_mon_hoc:any):Observable<any>{
    return this.http.get<any>(`${this.url}/MonHoc?id_mon_hoc=${id_mon_hoc}`);
  }
 
}