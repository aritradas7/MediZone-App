import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from './order-details.service';
import { Router } from '@angular/router';
import html2pdf from 'html2pdf.js';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
  service: OrderDetailsService
  orderid: string
  orderdate: string
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
  payableamount: number
  items: any[]


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

          this.email = this.users[0].email
          this.username = this.users[0].firstname+" "+this.users[0].lastname
      }
      else{
          alert('error')
          console.log(response['error'])
      }
    })
  }
  loadOrderItems(){
    this.service.getOrderItems().subscribe((response)=>{
      if(response['status']=='success')
      {
          this.items = response['data']
      }
      else{
          alert('error')
          console.log(response['error'])
      }
    })
  }
  printHtml(){
    var makepdf = document.getElementById("printArea");
    var opt = {
      margin:       0,
      filename:     'Medizone_Invoice.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2 },
      jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' }
    };
    html2pdf().set(opt).from(makepdf).save();
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
          this.phoneno = response['data'].drphoneno
          this.payableamount = parseFloat(this.totalamount) + parseFloat(this.deliverycharge)
          this.loadOrderItems()
          localStorage['OrderId'] = 0
      }
      else{
          alert('error')
          console.log(response['error'])
      }
    })
  }
}
