import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { fmt, mapToFormData } from '@core/utilities/helpers';
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

  ngOnInit(): void {}

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
}
