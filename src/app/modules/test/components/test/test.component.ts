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
export class TestComponent {
  content = 'nguywn quan du'
 }
