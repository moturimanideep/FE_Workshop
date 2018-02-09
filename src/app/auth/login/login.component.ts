import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map'
import { FormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { AuthService } from '../auth.service';
import { Login } from '../../apex/entities/login.entity';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  status:any;
  UserDetailsForm: any;
  login : Login = new Login;
  isActive:boolean =false;
  showServerError:String;
  constructor( private formBuilder: FormBuilder , private router: Router, private authService: AuthService) { 
    this.UserDetailsForm = this.formBuilder.group({
      'password': ['', Validators.required],
      'username': ['', Validators.required],
     });
     this.authService.userLoginEmit();
  }

  ngOnInit() {
  }
  Login(){
    var url="/api/login";
    this.authService.login('http://35.231.75.213:3000/login',this.login)
        .subscribe(
            data => {
              console.log(data)
              this.authService.storageSave(data);
              this.router.navigate(['workshop/userslist']);
            },
            error => {
                 console.log(error);
                 this.showServerError="OOPS! Something went wrong please try again"   
            });
}
forgotpswd(){
  this.router.navigate(['auth/setpassword'])
  }
signup(){
  this.router.navigate(['auth/register'])
}
}
