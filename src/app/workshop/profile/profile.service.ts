import { Injectable } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Storage }from '../../shared/utils/storage';
import { AppService } from '../../shared/service/app.service';
@Injectable()
export class ProfileService {
  constructor(private http: Http, private router: Router, private activatedroute: ActivatedRoute, private appService: AppService) { }
  save(data): Observable<any> {
    let host = 'http://35.231.75.213:3000/update';
    return this.http.post(host, data)
      .map(response => {
        return response.json()
      })
  }
  getCurrentProfileId(){
    return Storage.getSessionUser().message._id;
  }
  getProfile(id){
    let host = 'http://35.231.75.213:3000/details/?id='+id;
    return this.http.get(host).map(response=>{
      return response.json();
    })
  }
  searchById(url){
    return this.http.get(url).map(response=>{
      response.json();
    })
  }
  getParam(key: string){
    return this.activatedroute.snapshot.queryParams[key];
  }

}
