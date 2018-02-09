import { Injectable } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
@Injectable()
export class ProfileService {
  constructor(private http: Http, private router: Router, private activatedroute: ActivatedRoute) { }
  login(url, data): Observable<any> {
    return this.http.post(url, data)
      .map(response => {
        let data = response.json();
        console.log(data);
        // this.userDetails = data.message;
        // this.setToken(data.message.authToken, data.message.userName);
        return response.json()
      })
  }

}
