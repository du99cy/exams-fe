import { Component, OnInit } from '@angular/core';
import { AuthService } from '@core/authentication/auth.service';
import { content } from '@modules/home/models/content';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data : any=[];
  user_data:any
  constructor(private authService: AuthService) {

   }

  ngOnInit(): void {
    this.data= content
    this.user_data = this.authService.User
  }

}
