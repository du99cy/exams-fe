import { Injectable, ViewChild } from "@angular/core";
import { Subject } from "rxjs";
import { INotification } from "../model/interface";

@Injectable({
  providedIn: 'root'
})
export class NotificationService{
  _noti$ = new Subject<INotification>();
  constructor(){}
  addNoti(noti:INotification){
    this._noti$.next(noti);
  }
  get noti$(){
    return this._noti$;
  }
}
