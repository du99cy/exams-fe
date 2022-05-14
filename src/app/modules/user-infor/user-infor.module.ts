import { NgModule } from '@angular/core';
import { UserInforComponent } from './components/user-infor/user-infor.component';
import { UserInforRoutingModule } from './user-infor-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { PictureProfileComponent } from './components/picture-profile/picture-profile.component';
import { NormalEditorModule } from '@shared/modules/normal-editor.module';
import { CropperImageModule } from '@shared/modules/cropper-image.module';
@NgModule({
  imports: [ UserInforRoutingModule,ReactiveFormsModule ,MatTabsModule,NormalEditorModule,CropperImageModule],
  declarations: [  
    UserInforComponent, UserProfileComponent, PictureProfileComponent,
  ],
})
export class UserInforModule { }
