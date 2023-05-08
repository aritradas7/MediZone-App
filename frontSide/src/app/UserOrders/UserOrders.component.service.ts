
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
        
        OrderDate:string,
        deliveryDate:string,
        PaymentMode: string,
        userid:string,
        drname:string,
        address:string,
        drphoneno:string,
        totalAmount:string,
        totalDiscount:string,
        image:any,
        paymentid:string,
        deliveryCharge:string
    )

        {
            
            const body = new FormData()
            body.append('OrderDate', OrderDate)
            body.append('deliveryDate',deliveryDate)
            body.append('PaymentMode',PaymentMode)
            body.append('userid',userid)
            body.append('drname',drname)
            body.append('address',address)
            body.append('drphoneno',drphoneno)
            body.append('totalAmount',totalAmount)
            body.append('totalDiscount',totalDiscount)
            body.append('image',image)
            body.append('paymentid',paymentid)
            body.append('deliveryCharge',deliveryCharge)
            
            // {
            //     OrderDate:OrderDate,
            //     deliveryDate:deliveryDate,
            //     PaymentMode:PaymentMode,
            //     userid:userid,
            //     drname:drname,
            //     address:address,
            //     drphoneno:drphoneno,
            //     totalAmount:totalAmount,
            //     totalDiscount:totalDiscount,
            //     image:image
    
            // }
        
        return this.http.post(this.url1, body)
    }
}
