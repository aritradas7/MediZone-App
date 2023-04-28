
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class AllOrderListService {

    http: HttpClient
    url = 'http://localhost:4000/MRlogin/dashboard/orders'   //express port 4000
    url1 = 'http://localhost:4000/MRlogin/orders'
    url2 = 'http://localhost:4000/MRlogin/dashboard/orders/update' 

    constructor(httpClient: HttpClient) {
        this.http = httpClient
     }

     getAllProducts() {
        return this.http.get(this.url)
      }

      updateProduct(id: string, status: string){
         const body = {
            id:id,
            status:status
         }
         return this.http.post(this.url2,body)
      }
    
     deleteProduct(id: number) {
        
        this.url1 = this.url1+ '/'+id
        return this.http.delete(this.url1)
       
      }
    
}
