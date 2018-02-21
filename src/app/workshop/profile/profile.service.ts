import { Injectable } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Storage }from '../../shared/utils/storage';
import { AppService } from '../../shared/service/app.service';
import { Props } from '../../apex/common/props';
@Injectable()
export class ProfileService {
  private host = Props.API_END_POINT;
  private url: string = '';
  constructor(private http: Http, private router: Router, private activatedroute: ActivatedRoute, private appService: AppService) { }
  save(data): Observable<any> {
    this.url = this.host + 'update';
    return this.http.post(this.url, data)
      .map(response => {
        return response.json()
      })
  }
  getCurrentProfileId(){
    return Storage.getSessionUser().message._id;
  }
  getProfile(id){
    this.url = this.host + 'details/?id='+id;
    return this.http.get(this.url).map(response=>{
      return response.json();
    })
  }
  getParam(key: string){
    return this.activatedroute.snapshot.queryParams[key];
  }

}
