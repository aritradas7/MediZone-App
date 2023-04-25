import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class CartService {

    url='http://localhost:4000/MRlogin/addcart'
    url1='http://localhost:4000/MRlogin/cartDelete'

    constructor(private httpClient: HttpClient) { }
    
    getCart(mrid:string)
    {      
        const body = {
            mrid:localStorage['userid']
        }
        return this.httpClient.post(this.url,body)
    }

    deleteCart(productId:string){
        const body = {
            mrid:localStorage['userid'],
            productId:productId
        }
        return this.httpClient.post(this.url1,body)
    }



}