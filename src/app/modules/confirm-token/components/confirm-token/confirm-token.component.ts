import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfirmTokenService } from '@modules/confirm-token/services/confirm-token.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-confirm-token',
  templateUrl: './confirm-token.component.html',
  styleUrls: ['./confirm-token.component.scss'],
  providers:[ConfirmTokenService]
})
export class ConfirmTokenComponent implements OnInit, OnDestroy {
  is_success: boolean = true;
  message: string = '';
  token: any;
  routeSub: Subscription = new Subscription();
  constructor(
    private activatedRoute: ActivatedRoute,
    private confirmTokenService: ConfirmTokenService
  ) {}

  ngOnInit(): void {
    this.getParms('id');
  }

  getParms(param_name: string) {
    let paramsSub = this.activatedRoute.params.subscribe((params) => {
      this.token = params[param_name];
      this.confirmTokenService.confirmToken(this.token).subscribe((res)=>{
        this.message = res.data.notif
        this.is_success = res.status_code == 200 ? true : false;
      },
      (err:HttpErrorResponse)=>{
        alert(err.error.detail);
      })
    }
    );
    this.routeSub.add(paramsSub);
  }


  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }
}
