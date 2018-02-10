import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../auth/login/login.component';
import { RegisterComponent } from '../auth/register/register.component';
import { SetpasswordComponent } from '../auth/setpassword/setpassword.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import  { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'signin', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'setpassword', component: SetpasswordComponent }
];


@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule.forRoot(routes, { useHash: true }),
    SharedModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    SetpasswordComponent
  ],
  exports: [RouterModule,MatCardModule,FlexLayoutModule,MatFormFieldModule,MatInputModule],
  providers: [AuthService]
})
export class AuthModule { }
