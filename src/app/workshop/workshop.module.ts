import { UserService } from './users/users.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import  { SharedModule } from '../shared/shared.module';


import { EditComponent } from '../workshop/profile/edit/edit.component';
import { ViewComponent } from '../workshop/profile/view/view.component';
import { UserprofileComponent } from '../workshop/users/userprofile/userprofile.component';
import { UserslistComponent } from '../workshop/users/userslist/userslist.component';

import { ProfileService } from '../workshop/profile/profile.service';

const routes: Routes = [
  { path: 'myProfile-edit', component: EditComponent},
  { path: 'myProfile', component: ViewComponent },
  { path: 'userprofile', component: UserprofileComponent },
  { path: 'userslist', component: UserslistComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { useHash: true }),
    SharedModule.forRoot()
  ],
  declarations: [
    EditComponent,
    ViewComponent,
    UserprofileComponent,
    UserslistComponent
  ],
  exports: [RouterModule],
  providers: [UserService, ProfileService]
})
export class WorkshopModule { }
