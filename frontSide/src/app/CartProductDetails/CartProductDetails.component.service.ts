import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class CartProductDetailsService {

    url = 'http://localhost:4000/login/dashboard/product/'
    url1 ='http://localhost:4000/MRlogin/cartEdit'
    url2 = 'http://localhost:4000/MRlogin/cartDelete'

    constructor(private httpClient: HttpClient) { }


    getProduct(id: string)
    {
        return this.httpClient.get(this.url + id)
    }


    postInCart(Quantity:number,totalAmount:number,totalDiscount:number,MRid:string,productID:string)
    {
        
        const body = {
            Quantity:Quantity,
            totalAmount:totalAmount,
            totalDiscount:totalDiscount,
            MRid:MRid,
            productID:productID
        }
        
        return this.httpClient.put(this.url1,body)
    }

    DeleteFromCart(id:number)
    {
        const body = {
            id:id
        }

        return this.httpClient.post(this.url2,body)
    }



}
