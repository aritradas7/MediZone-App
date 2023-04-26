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
    drname: string = ''
    phoneno: string =''
    OrderDate: string
    deliveryDate: string
    PaymentMode: string
    state: string = ''
    city: string = ''
    pincode: string = ''
    address: string = ''
    image: any
    



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
              var OrderDate = new Date()
              var deliveryDate = new Date()
              deliveryDate.setDate( deliveryDate.getDate() + 3 );
              var totalAmount = localStorage['TotalAmount']
              var totalDiscount = localStorage['TotalDiscount']
              
              this.service.UpdateOrders(OrderDate.toLocaleDateString(),deliveryDate.toLocaleDateString(),
              this.PaymentMode,userid,drname,address,drphoneno,totalAmount,totalDiscount,this.image)
              .subscribe((response)=>{
                  if(response['status']=='success')
                  {
                      alert('Order Placed Successfully')
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
        this.image = event.target.files[0]
     }
    ngOnInit() { }

}


