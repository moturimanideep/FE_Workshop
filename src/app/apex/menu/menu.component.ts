import { Component, OnInit, Input, SimpleChange } from '@angular/core';
import { Menu } from './menu.interface';
//import { ApexService } from '../../shared/service/apex.service';
import { RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent implements OnInit {
  //private _menuSubscription: any;
  menuList: any[];
  activeMenuObject: any;
  isActive:boolean = false;
  states:any = {};
  @Input() inputData;
  
  constructor() { 
 
    this.states.activeItem = 'ADMIN_DASHBOARD';
    // this._menuSubscription = this.apexService.menuEvent.subscribe(data => {
    //     this.roleMenuAccess(data);
    // });
    this.roleMenuAccess();
  }

  // ngOnChanges(changes: { [key: string]: SimpleChange }) {
  //   if (changes.hasOwnProperty('inputData')) {
  //         this.roleMenuAccess([]);
  //   }

  // }
  ngOnInit() {
    // if (window.innerWidth < 768) {
    //   this.navMode = 'over';
      
    // }

  }
  roleMenuAccess() {
    this.menuList = [];
      this.menus().forEach( (item) => {
            this.menuList.push(item);
            console.log(this.menuList)
          
      })
  }

  menus() {
    return [
      {
        "id": 'USERS',
        "name": "users",
        "link": "workshop/userslist",
        "icon": "user_management"
      },
      {
        "id": 'PROFILES',
        "name": "profile",
        "link": "workshop/userprofile",
        "icon": "profile "
      }
    ]
  }
}
