import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { EditComponent } from '../workshop/profile/edit/edit.component';
import { ViewComponent } from '../workshop/profile/view/view.component';
import { UserprofileComponent } from '../workshop/users/userprofile/userprofile.component';
import { UserslistComponent } from '../workshop/users/userslist/userslist.component';

import { UsersService } from '../workshop/users/users.service';
import { ProfileService } from '../workshop/profile/profile.service';

const routes: Routes = [
  { path: 'workshop/edit', component: EditComponent},
  { path: 'workshop/view', component: ViewComponent },
  { path: 'workshop/userprofile', component: UserprofileComponent },
  { path: 'workshop/userslist', component: UserslistComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  declarations: [
    EditComponent,
    ViewComponent,
    UserprofileComponent,
    UserslistComponent
  ],
  exports: [RouterModule],
  providers: [UsersService, ProfileService]
})
export class WorkshopModule { }
