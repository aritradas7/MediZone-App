
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class UserOrdersService {
    http: HttpClient
    url1 = 'http://localhost:4000/MRlogin/cart/confirmorder'   //express port 4000
    url2='http://localhost:4000/MRlogin/clearCart'



    constructor(httpClient: HttpClient) {
        this.http = httpClient

        console.log(this.url1);
     }

     clearCart(userid:string){
        const body = {
            mrid:userid
        }
        return this.http.post(this.url2, body)
     }
    UpdateOrders(
        OrderDate:String,
        deliveryDate:String,
        PaymentMode: number,
        userid:string,
        drname:String,
        address:String,
        drphoneno:String,
        totalAmount:String,
        totalDiscount:String,
        prescription:Buffer
    )

        {

        const body = {
            OrderDate:OrderDate,
            deliveryDate:deliveryDate,
            PaymentMode:PaymentMode,
            userid:userid,
            drname:drname,
            address:address,
            drphoneno:drphoneno,
            totalAmount:totalAmount,
            totalDiscount:totalDiscount,
            prescription:prescription

        }

        return this.http.put(this.url1, body)
    }
}
