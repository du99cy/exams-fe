import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { fmt, mapToFormData } from '@core/utilities/helpers';
import { environment } from '@environment/environment';
import { api_urls } from '@shared/configs/api_url';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {
  prev_url: any;
  BASE_URL = api_urls.LOCAL_API_URL;
  file!: File;
  constructor(
    private httpClient: HttpClient,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.testAuth()
  }

  changeFile(event: any) {
    this.file = event.target.files[0];
    const formData = mapToFormData({ file: this.file });
    return this.httpClient
      .post(`${this.BASE_URL}/test/uploadfile`, formData)
      .subscribe((res:any) => {
        let file_ = res;

        var URL = window.URL;

        this.prev_url = this.sanitizer.bypassSecurityTrustUrl(
          URL.createObjectURL(file_)
        );
        console.log(this.prev_url);
      });
  }

  getUser(){
    this.httpClient.get( `${this.BASE_URL}/test/test_auth`).subscribe(res=>{
      console.log(res);
    })
  }

  testAuth(){
    return this.httpClient.get( `${environment.apiUrl}/topic/ma_lop/620a139ebf18cbd12b894684`).subscribe(res=>{
      console.log(res);
    })
  }
}
