import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '@core/authentication/auth.service';
import { User } from '@core/authentication/user';
import { CurriculumService } from '@modules/course-manage/modules/curriculum/services/curriculum.service';
import { api_urls } from '@shared/configs/api_url';

@Component({
  selector: 'app-picture-profile',
  templateUrl: './picture-profile.component.html',
  styleUrls: ['./picture-profile.component.scss']
})
export class PictureProfileComponent implements OnInit {
  avatarPic:string
  link = api_urls.LOCAL_API_URL
  constructor(private authService: AuthService, public curriculumService:CurriculumService) { }

  ngOnInit(): void {
    this.authService.UserObservable.subscribe(res=>{
      this.avatarPic=`${this.link}/${res.avatar_pic}`
      console.log(this.avatarPic)
    })
  }
  getImgLink(event:any){
    
    this.curriculumService.uploadFile(event.file,"public").subscribe(res=>{
      let userUpdate : User={avatar_pic:res.data.file}
      this.authService.updateUser(userUpdate).subscribe(res=>{
        console.log(res)
      })
    })
  }
}
