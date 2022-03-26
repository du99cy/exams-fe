import { Injectable } from '@angular/core';
import { environment } from '@environment/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterCourseService {
  url = `${environment.apiUrl}/nguoithamgialop/class-registration`;
  Course: any;
  constructor(private http: HttpClient) {}
  private _refresh$ = new Subject<void>();

  get refresh$() {
    return this._refresh$;
  }
  registerCourse(id_lop_hoc:any):Observable<any>{
    return this.http.post<any>(
      `${this.url}`,{
        id_lop_hoc: id_lop_hoc
      }
    ).pipe(
      tap(() =>{this._refresh$.next();}));
  }
}
