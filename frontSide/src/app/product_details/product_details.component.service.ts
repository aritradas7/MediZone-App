import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class ProductDetailsService {

    url = 'http://localhost:4000/login/dashboard/product/'
    url1 ='http://localhost:4000/MRlogin/cart'

    constructor(private httpClient: HttpClient) { }
    

    getProduct(id: string)
    {
        return this.httpClient.get(this.url + id)
    }


    postInCart(Quantity:number,totalAmount:number,totalDiscount:number,MRid:string,productID:string,file:string)
    {
        const body = {
            Quantity:Quantity,
            totalAmount:totalAmount,
            totalDiscount:totalDiscount,
            MRid:MRid,
            productID:productID,
            file:file
        }

        return this.httpClient.post(this.url1,body)
    }



}