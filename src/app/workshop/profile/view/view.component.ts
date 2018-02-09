import { ProfileService } from './../profile.service';
import { AppService } from './../../../shared/service/app.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import {Profile} from './../../../apex/entities/profile.entity';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  profile:Profile = new Profile();
  constructor(private router: Router, private profileservice:ProfileService) { 
    this.getProfile(this.profileservice.getCurrentProfileId());
  }
  ngOnInit() {
  }
  getProfile(id:any){
    this.profileservice.getProfile(id).subscribe((data:any)=>{
      if(data){
        this.profile = data.message;
        console.log(data)
      }
    })
  }
  editProfile(){
    this.router.navigate(['myProfile-edit']);
  }

}
