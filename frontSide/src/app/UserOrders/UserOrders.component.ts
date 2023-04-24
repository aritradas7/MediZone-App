import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserOrdersService } from './UserOrders.component.service';


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
              const userid = localStorage['id']

              const address = this.address +', ' + this.city +', ' + this.state +', ' + this.pincode
              const drname = this.drname
              const drphoneno = this.phoneno

              this.OrderDate = Date()
              this.deliveryDate = this.OrderDate + 3
              var totalAmount
              var totalDiscount

              this.service.UpdateOrders(this.OrderDate,this.deliveryDate,this.PaymentMode,userid,drname,address,drphoneno,totalAmount,totalDiscount)
              .subscribe((response)=>{
                  if(response['status']=='success')
                  {
                      alert('success')
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

    ngOnInit() { }

}
