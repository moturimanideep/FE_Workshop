import { Component, OnInit } from '@angular/core';
import { UserService } from './../users.service';
import {Profile} from './../../../apex/entities/profile.entity';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.scss']
})
export class UserprofileComponent implements OnInit {
  paramId: any;
  profileData:Profile = new Profile;
  constructor(private userservice: UserService) {
    this.paramId = this.userservice.getParam('id');
    console.log(this.paramId)
    this.userservice.searchById(this.paramId).subscribe((data:any) => {
      console.log(data);
      if(data){
        this.profileData = data.message;
        console.log(this.profileData);
      } 
    });
  }

  ngOnInit() {
  }
  outputEvent($event: any){
    this.profileData.image = $event;
  }
}
