import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { CommonService } from '../../service/common.service';
import { Props } from '../../apex/common/props';

@Injectable()
export class UserService extends CommonService {
  private host = Props.API_END_POINT;
  private url: string = '';
  baseUrl: string;
  userDetails: any;
  token: string;
  constructor(private http: Http, private router: Router, private activatedroute: ActivatedRoute) {
    super();
  }
  
  getUserDetails() {
    return this.userDetails;
  }
  getParam(key: string){
    return this.activatedroute.snapshot.queryParams[key];
  }
  logout(): void {
    this.token = null;
    localStorage.removeItem('currentUser');
  }
 searchById(id:any): Observable<any> {
    this.url = this.host + "details?id=" + id;
    return this.http.get(this.url)
      .map(res => res.json())
  }

  userSearch(){
    this.url = this.host + "users";
    return this.http.get(this.url).map(response=>{
      return response.json();
    })
  }
}