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
userList:any;
  constructor(private router: Router, private userservice:UserService) { 

    this.userservice.userSearch('http://35.231.75.213:3000/users').subscribe((data)=>{

      this.userList = data.message;
      console.log(data)
    })
  }

  ngOnInit() {
  }
  userprofile(item){
    console.log(item._id)
    this.router.navigate(['workshop/userprofile'], {queryParams: {id:item._id}});
  }


}
