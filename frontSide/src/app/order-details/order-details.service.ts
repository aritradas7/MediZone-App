
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class OrderDetailsService {
    http: HttpClient
    url = 'http://localhost:4000/MRlogin/orderdetails'   //express port 4000
    url1 = 'http://localhost:4000/profile'  

    constructor(httpClient: HttpClient) {
        this.http = httpClient
    }
    getUser()
    {
      var userid=localStorage['userid']
      const body = {
        userid:userid
      }
      return this.http.put(this.url1,body)
    }

    getOrderDetails()
    {
        // localStorage['OrderId'] = '646219a9b2a7844131767e3f'
        var OrderId=localStorage['OrderId']
      const body = {
        OrderId:OrderId
      }
      return this.http.post(this.url,body)
    }
}