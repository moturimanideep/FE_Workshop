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
    this.roleMenuAccess([]);
  }

  ngOnChanges(changes: { [key: string]: SimpleChange }) {
    if (changes.hasOwnProperty('inputData')) {
          this.roleMenuAccess([]);
    }

  }
  ngOnInit() {
    // if (window.innerWidth < 768) {
    //   this.navMode = 'over';
      
    // }

  }
  roleMenuAccess(data: any[]) {
    this.menuList = [];
    let id_pre = "";
    data.forEach( (element: any) => {
      id_pre = element.grpcode+'_'+element.role+'_';
      this.menus().forEach( (item) => {
          if(element.id == id_pre+item.id && element.active == true){
            this.menuList.push(item);
            console.log(this.menuList)
          } 
      })
    })
  }

  menus() {
    return [
      {
        "id": 'PROFILES',
        "name": "Profile",
        "link": "workshop/userprofile",
        "icon": "profile"
      },
      {
        "id": 'USER_MANAGEMENT',
        "name": "User Management",
        "link": "workshop/userslist",
        "icon": "user_management"
      }
    ]
  }
}
