import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LoginService } from '@modules/login/services/login.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
  providers: [LoginService],
})
export class ForgotPasswordComponent implements OnInit {
  loading: boolean = false;
  email_invalid = false;

  constructor(
    public dialogRef: MatDialogRef<ForgotPasswordComponent>,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {}

  sendEmail(email_text: string): void {
    this.loading = true;
    const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!email_text.match(EMAIL_REGEX)) {
      this.email_invalid = true;
    } else {
      this.email_invalid = false;
      this.loginService.forgotPassword(email_text).subscribe(
        (res: any) => {
          if(res.status_code ==200){
            this.loading = false;
            this.dialogRef.close();
            //alert notifacation

            alert("Kiểm tra email của bạn")
          }

        },
        (err: HttpErrorResponse) => {
          alert(err.error.detail)
          this.dialogRef.close();
        }
      );
    }
  }
}
