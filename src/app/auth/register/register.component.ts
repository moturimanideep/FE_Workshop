import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  workstatus = [
    {value: 'Employee', viewValue: 'Employee'},
    {value: 'Student', viewValue: 'Student'},
    {value: 'Others', viewValue: 'Others'}
  ];
  technologies = [
    {value: 'Front End ', viewValue: 'Front End'},
    {value: 'Devops', viewValue: 'Devops'},
    
  ];
  constructor() { }

  ngOnInit() {
  }

}
