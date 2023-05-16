
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class OrderDetailsService {
    http: HttpClient
    url = 'http://localhost:4000/MRlogin/orderdetails'   //express port 4000
    url1 = 'http://localhost:4000/profile'
    url2 = 'http://localhost:4000/MRlogin/orderitems'

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
        //localStorage['OrderId'] = '6463a2408d1731f23c51859c'
        var OrderId=localStorage['OrderId']
        const body = {
          OrderId:OrderId
        }
      return this.http.post(this.url,body)
    }

    getOrderItems()
    {
        var OrderId=localStorage['OrderId']
        const body = {
          OrderId:OrderId
        }
      return this.http.post(this.url2,body)
    }
}
