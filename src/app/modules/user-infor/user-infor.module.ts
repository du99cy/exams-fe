import { NgModule } from '@angular/core';
import { UserInforComponent } from './components/user-infor/user-infor.component';
import { UserInforRoutingModule } from './user-infor-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [ UserInforRoutingModule,ReactiveFormsModule ],
  declarations: [  
    UserInforComponent
  ],
})
export class UserInforModule { }
