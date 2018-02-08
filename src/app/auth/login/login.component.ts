import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map'
import { FormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import {AuthService} from '../auth.service';
import {Login} from '../../apex/entities/login.entity';
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
  }

  ngOnInit() {
  }
  Login(){
    var url="/api/login";
    this.authService.login(url,this.login)
        .subscribe(
            data => {
               if(data.type == "success" && data.message.typeId == "UT4"){
                localStorage.setItem("authToken",data.message.authToken);
                this.router.navigate(['Admin']);
               }
               else if(data.type == "success" && data.message.typeId == "UT1"){
                this.router.navigate(['Student']);
               }
               else{
                 this.isActive = !this.isActive;
                 this.status="Invalid Credentials";
                 console.log("Invalid Credentials")
               }
            },
            error => {
                 console.log(error);
                 this.showServerError="Something went wrong please try again later"   
            });
}
forgotpswd(){
  this.router.navigate(['/Forgotpassword'])
  }
}
