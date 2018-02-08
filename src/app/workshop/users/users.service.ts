import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { CommonService } from '../../service/common.service';

@Injectable()
export class UserService extends CommonService {
  baseUrl: string;
  userDetails: any;
  token: string;
  constructor(private http: Http, private router: Router, private activatedroute: ActivatedRoute) {
    super();
  }
  login(url, data): Observable<any> {
    return this.http.post(url, data)
      .map(response => {
        let data = response.json();
        console.log(data);
        this.userDetails = data.message;
        this.setToken(data.message.authToken, data.message.userName);
        return response.json()
      })
  }
  getUserDetails() {
    return this.userDetails;
  }
  register(url, data): Observable<any> {
    console.log(data);
    return this.http.post(url, data)
      .map(response => {
        response.json();
        this.userDetails = data.info;
        // this.setToken(data.message.authToken, data.info.userName);
        return response.json()
      }
      )
  }

  getParam(key: string){
    return this.activatedroute.snapshot.queryParams[key];
  }

  logout(): void {
    this.token = null;
    localStorage.removeItem('currentUser');
  }

  userSearch(url): Observable<any> {
    return this.http.get(url)
      .map(res => res.json())

  }
}