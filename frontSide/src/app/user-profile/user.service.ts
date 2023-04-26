
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class SingleUserService {
    http: HttpClient
    url = 'http://localhost:4000/profile'   //express port 4000

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
    
    saveUser(dateofbirth:string,phoneno:string,email:string,password:string)
    {
      var userid=localStorage['userid']
      const body = {
        userid:userid,
        dateofbirth:dateofbirth,
        phoneno:phoneno,
        email:email,
        password:password
      }
      return this.http.post(this.url,body)
    }
}