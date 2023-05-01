import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserOrdersService } from './UserOrders.component.service';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';

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
    PaymentMode: string = 'UPI'
    state: string = ''
    city: string = ''
    pincode: string = ''
    address: string = ''
    image: any
    payref: string =''
    
    elementType = NgxQrcodeElementTypes.URL;
    correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
    value = '';


    constructor(private router: Router,
        private service: UserOrdersService,
        private service1: UserOrdersService,
        private service2 :UserOrdersService ) {

        }

    ngOnInit() { 
        this.value = 'upi://pay?pa=reekparnasen-1@okhdfcbank&pn=MEDIZONE&cu=INR&am='+localStorage['TotalAmount'];
        document.getElementById("paybtn").innerHTML = "Proceed to Payment"
    }

    changetext(){
        if (this.PaymentMode == "UPI"){
            document.getElementById("paybtn").innerHTML = "Proceed to Payment"
        }
        else{
            document.getElementById("paybtn").innerHTML = "Place Order"
        }
    }

    onproceedpay(){
        const phoneno1:String = String(this.phoneno)
        const pincode1:String = String(this.pincode)
        if(this.drname.length == 0){
            alert('Doctor Name can not be empty')
        }
        else if(phoneno1.length == 0 || phoneno1.length != 10){
            alert('phone no is empty or not a 10 digits')
        }
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
        else {
            if(confirm('Are you sure ? Once Ordered can not be canceled' ))
            {
                if(this.PaymentMode == "UPI"){
                    document.getElementById('dlvinst').setAttribute('hidden','hidden')
                    document.getElementById('qr').removeAttribute('hidden')
                }
                else{
                    this.payref = this.PaymentMode
                    this.onCompleteOrder()
                }
                
            }
        }
    }

    onSuccessfulPayment(){
        document.getElementById('qr').setAttribute('hidden','hidden')
        document.getElementById('upiref').removeAttribute('hidden')
    }

    onCompleteOrder()
    { 
        if(this.payref.length == 0){
            alert('Please enter payment reference number')
        }
        else {
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
            this.PaymentMode,userid,drname,address,drphoneno,totalAmount,totalDiscount,this.image,this.payref)
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

    onSelectImage(event)
    {
        this.image = event.target.files[0]
    }
}


