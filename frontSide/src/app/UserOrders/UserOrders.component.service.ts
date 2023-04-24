
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class UserOrdersService {
    http: HttpClient
    url1 = 'http://localhost:4000/MRlogin/cart/confirmorder'   //express port 4000



    constructor(httpClient: HttpClient) {
        this.http = httpClient

        console.log(this.url1);
     }


     UpdateOrders(
        OrderDate:String,
        deliveryDate:String,
        PaymentMode: number,
        mrid:number,
        drname:String,
        address:String,
        drphoneno:String,
        totalAmount:String,
        totalDiscount:String

        )

        {

        const body = {
            OrderDate:OrderDate,
            deliveryDate:deliveryDate,
            PaymentMode:PaymentMode,
            mrid:mrid,
            drname:drname,
            address:address,
            drphoneno:drphoneno,
            totalAmount:totalAmount,
            totalDiscount:totalDiscount

        }

        return this.http.put(this.url1, body)
    }
}
