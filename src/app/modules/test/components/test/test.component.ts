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
  content = 'nguywn quan du'

  constructor(private httpClient:HttpClient,private sanitizer: DomSanitizer){

  }
  ngOnInit() {
    this.httpClient.get(`${api_urls.LOCAL_API_URL}/resourse/6260cd7c2aec0c215d12e7ac`,{responseType: 'blob'}).subscribe(res=>{
      var urlObject = URL.createObjectURL(res);

      window.location.href = urlObject
    })
  }
 }
