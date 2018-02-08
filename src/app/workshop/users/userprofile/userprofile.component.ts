import { Component, OnInit } from '@angular/core';
import { UserService } from './../users.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.scss']
})
export class UserprofileComponent implements OnInit {

  constructor(private userservice: UserService) {
    console.log(this.userservice.getParam('id'));
   }

  ngOnInit() {
  }

}
