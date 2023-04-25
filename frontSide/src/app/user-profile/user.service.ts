
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class SingleUserService {
    http: HttpClient
    url = 'http://localhost:4000/login/dashboard/user'   //express port 4000

    constructor(httpClient: HttpClient) {
        this.http = httpClient
    }

    getUser()
    {
      var userid=localStorage['userid']
      const body = {
        userid:userid
      }
      return this.http.put(this.url,body)
    }
     
}