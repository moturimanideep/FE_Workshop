import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../auth/login/login.component';
import { RegisterComponent } from '../auth/register/register.component';
import { SetpasswordComponent } from '../auth/setpassword/setpassword.component';

import { AuthService } from '../auth/auth.service';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'auth/register', component: RegisterComponent },
  { path: 'auth/setpassword', component: SetpasswordComponent }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    SetpasswordComponent
  ],
  exports: [RouterModule],
  providers: [AuthService]
})
export class AuthModule { }
