import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UnautherizedRoutingModule} from "./unautherized-routing.module";
import { LoginComponent } from './login/login.component';
import { NewUserComponent } from './new-user/new-user.component';

@NgModule({
  declarations: [LoginComponent, NewUserComponent],
  imports: [
    CommonModule,
    UnautherizedRoutingModule
  ]
})
export class UnautherizedModule { }
