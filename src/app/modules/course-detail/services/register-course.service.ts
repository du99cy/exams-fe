import { Injectable } from '@angular/core';
import { environment } from '@environment/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs';
import {mapToHttpParamsQuery} from '@core/utilities/helpers'
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
    let httParam = mapToHttpParamsQuery({id_lop_hoc:id_lop_hoc})

    return this.http.post<any>(
      `${this.url}`,null,{params:httParam}
    ).pipe(
      tap(() =>{this._refresh$.next();}));
  }
}
