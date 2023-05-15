import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from './order-details.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
  service: OrderDetailsService
  orderid: string
  orderdate: Date
  userid: string
  username: string
  users: any[]
  phoneno: string
  email: string
  address: string
  totalamount: string
  paymentid: string
  deliverycharge: string
  totaldiscount: string


  constructor(private router: Router,orderDtlsService: OrderDetailsService) { 
    this.service = orderDtlsService;
    this.loadOrderDtls();
    this.loadUserDtls();
  }

  ngOnInit(): void {
  }
  loadUserDtls(){
    this.service.getUser().subscribe((response)=>{
      if(response['status']=='success')
      {
          this.users = response['data']
          this.phoneno = this.users[0].phoneno
          this.email = this.users[0].email
          this.username = this.users[0].firstname+" "+this.users[0].lastname
      }
      else{
          alert('error')
          console.log(response['error'])
      }
    })
  }

  loadOrderDtls(){
    this.service.getOrderDetails().subscribe((response)=>{
      if(response['status']=='success')
      {
          this.orderid = response['data']._id
          this.address = response['data'].address
          this.totalamount = response['data'].totalAmount
          this.paymentid = response['data'].paymentid
          this.deliverycharge = response['data'].deliveryCharge
          this.orderdate = response['data'].OrderDate
          this.totaldiscount = response['data'].totalDiscount
          localStorage['OrderId'] = 0
      }
      else{
          alert('error')
          console.log(response['error'])
      }
    })
  }
}
