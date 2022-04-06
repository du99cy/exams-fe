import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { fmt, mapToFormData } from '@core/utilities/helpers';
import { environment } from '@environment/environment';
import { api_urls } from '@shared/configs/api_url';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {
  videoURL: SafeUrl;
  video: Blob;
  prev_url: any;
  BASE_URL = api_urls.LOCAL_API_URL;
  file!: File;
  constructor(
    private httpClient: HttpClient,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.getImage().subscribe((img) => {

      this.video = img;
      this.videoURL = this.sanitizer.bypassSecurityTrustUrl(
        URL.createObjectURL(this.video)
      );
    });
    // this.getText()
  }

  getImage() {
    return this.httpClient.get('http://localhost:8000/video',{responseType:'blob'});
  }

  getText(){
    this.httpClient.get('http://127.0.0.1:8000/text').subscribe((res)=>{
      console.log(res)
    });
  }
 }
