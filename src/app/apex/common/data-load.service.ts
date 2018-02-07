import { Injectable } from '@angular/core';
import { Props } from '../../apex/common/props';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class DataLoadService {
    private host = Props.API_END_POINT;
    private url: string = '';

    constructor(private http: HttpClient)    {
        
     }
     roles(){
        this.url = this.host + "/dataload/roles";
        return this.http.get(this.url);
     }
      consumers(data: any) {
        this.url = this.host+"/consumer/"+data;
        return this.http.get(this.url);
      }

      districts() {
        this.url = this.host + "/dataload/districts";
        return this.http.get(this.url);
      }
}
