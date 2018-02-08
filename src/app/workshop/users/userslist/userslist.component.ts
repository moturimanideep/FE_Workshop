import { UserService } from './../users.service';
import { AppService } from './../../../shared/service/app.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.scss']
})
export class UserslistComponent implements OnInit {

  constructor(private router: Router, private userservice:UserService) { }

  ngOnInit() {
  }
  userprofile(){
    this.router.navigate(['workshop/userprofile'], {queryParams: {id:'1'}});
  }
}
