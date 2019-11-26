import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserMgmtComponent } from './user-mgmt/user-mgmt.component';

const routes: Routes = [

  {
    path: 'UserManagement', component: UserMgmtComponent,
    children: [
      { path: 'Detail', component: UserDetailComponent },
      { path: 'List', component: UserListComponent }
    ]
  }

];
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
