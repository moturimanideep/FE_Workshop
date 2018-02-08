import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { CommonService } from '../service/common.service';

@Injectable()
export class AuthService extends CommonService {
  baseUrl: string;
  userDetails: any;
  token: string;
  constructor(private http: Http) {
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
  register(url, data): Observable<any> {debugger;
    console.log(data);
    return this.http.post(url, data )
      .map(response =>{
           response.json();
            this.userDetails = data.info;
        // this.setToken(data.message.authToken, data.info.userName);
         return response.json()
      }   
      )    
  }
logout(): void {
  this.token = null;
  localStorage.removeItem('currentUser');
}
}