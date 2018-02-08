import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map'
import { FormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { AuthService } from '../auth.service';
import { Register } from '../../apex/entities/register.entity';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  RegistrationForm: any;
register: Register;
  workstatus = [
    {value: 'Employee', viewValue: 'Employee'},
    {value: 'Student', viewValue: 'Student'},
    {value: 'Others', viewValue: 'Others'}
  ];
  technologies = [
    {value: 'Front End ', viewValue: 'Front End'},
    {value: 'Devops', viewValue: 'Devops'},
    
  ];
  constructor(private formBuilder: FormBuilder , private router: Router, private authService: AuthService) { 
    this.register = new Register();
      this.RegistrationForm = this.formBuilder.group({
      'firstname': ['', Validators.required],
      'username': ['', Validators.required],
      'email': ['', Validators.required],
      'mobile': ['', Validators.required],
     });
  }

  ngOnInit() {
  }
  registerr(){
    this.authService.register('http://35.231.75.213:3000/register', this.register).subscribe((data)=>{
      console.log(data);
    })
  }


}
