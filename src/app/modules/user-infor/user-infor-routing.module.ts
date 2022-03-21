import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserInforComponent } from './components/user-infor/user-infor.component';


const routes: Routes = [
  {
    path:'',
    component: UserInforComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class UserInforRoutingModule {
}
