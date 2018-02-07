import { Component, OnInit,SimpleChange} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menuList: any[] = [];

  constructor() { }
  ngOnChanges(changes: { [key: string]: SimpleChange }) {
    if (changes.hasOwnProperty('inputData')) {
          this.roleMenuAccess(changes['inputData'].currentValue);
    }

  }
  menus() {
    return [
      {
        "id": 'Users',
        "name": "Users",
        "link": "/workshop/userslist",
        "icon": "admin_dashboard"
      },
      {
        "id": 'Profiles',
        "name": "Profiles",
        "link": "/workshop/userprofile",
        "icon": "admin_dashboard"
      }
    ]
  }
  roleMenuAccess(data: any[]) {
    this.menuList = [];
    let id_pre = "";
    data.forEach( (element: any) => {
      id_pre = element.grpcode+'_'+element.role+'_';
      this.menus().forEach( (item) => {
          if(element.id == id_pre+item.id && element.active == true){
            this.menuList.push(item);
          } 
      })
    })
  }

  ngOnInit() {
  }

}
