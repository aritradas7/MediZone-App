import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserOrdersService } from './UserOrders.component.service';

declare const Buffer;

@Component({
    selector: 'add-user',
    templateUrl: './UserOrders.component.html',
    styleUrls : ['./UserOrders.component.css']
})

export class UserOrdersComponent implements OnInit {
    drname = ''
    phoneno =''
    OrderDate = ''
    deliveryDate = ''
    PaymentMode = 1
    state = ''
    city = ''
    pincode: String = ''
    address = ''
    prescription: Buffer



    constructor(private router: Router,
        private service: UserOrdersService,
        private service1: UserOrdersService,
        private service2 :UserOrdersService ) {

        }


    onadd()
    {
        const phoneno1:String = String(this.phoneno)
        const pincode1:String = String(this.pincode)
        if(this.drname.length == 0){
            alert('Doctor Name can not be empty')
        }
        else if(phoneno1.length == 0 || phoneno1.length != 10){
            alert('phone no is empty or not a 10 digits')
        }
        // else if(this.OrderDate.length == 0){
        //     alert('OrderDate is invaild')
        // }
        // else if(this.deliveryDate.length == 0){
        //     alert('DeliveryDate is invaild')
        // }
        else if(this.state.length == 0){
            alert('state can not be empty')
        }
        else if(this.city.length == 0){
            alert('city can not be empty')
        }
        else if(pincode1.length == 0 || pincode1.length != 6){
            alert('invaid pincode')
        }
        else if(this.address.length == 0){
            alert('Adress can not be empty')
        }
        else{
            if(confirm('Are you sure ? Once Ordered can not be canceled' ))
            {
              const userid = localStorage['userid']

              const address = this.address +', ' + this.city +', ' + this.state +', ' + this.pincode
              const drname = this.drname
              const drphoneno = this.phoneno

              this.OrderDate = Date()
              this.deliveryDate = this.OrderDate + 3
              var totalAmount = localStorage['TotalAmount']
              var totalDiscount = localStorage['TotalDiscount']

              this.service.UpdateOrders(this.OrderDate,this.deliveryDate,this.PaymentMode,userid,drname,address,drphoneno,totalAmount,totalDiscount,this.prescription)
              .subscribe((response)=>{
                  if(response['status']=='success')
                  {
                      alert('success')
                      localStorage['TotalAmount'] = 0
                      localStorage['TotalDiscount'] = 0
                      localStorage['Quantity'] = 0
                      this.service.clearCart(userid).subscribe()
                      this.router.navigate(['/MRlogin/cart'])
                  }
                  else
                  {
                      console.log(response['error'])
                      alert('error')
                  }
              })
            }
        }

    }

    onSelectImage(event)
     {
        var img = event.target.files[0]
        var encImg = img.toString('base64');
        var s = Buffer.from(encImg, 'base64');
        this.prescription = s
     }
    ngOnInit() { }

}


