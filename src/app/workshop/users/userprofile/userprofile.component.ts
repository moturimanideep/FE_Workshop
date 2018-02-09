import { Component, OnInit } from '@angular/core';
import { UserService } from './../users.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.scss']
})
export class UserprofileComponent implements OnInit {
  param: any;
  profileData:any;
  constructor(private userservice: UserService) {
    this.param = this.userservice.getParam('id');
    console.log(this.param)
    this.userservice.searchById('http://35.231.75.213:3000/details?id=' + this.param).subscribe((data:any) => {
      console.log(data)
      if(data){
        this.profileData = data.message;
        console.log(this.profileData);
      } 
    });
  }

  ngOnInit() {
  }

}
