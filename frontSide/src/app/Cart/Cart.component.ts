import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from './Cart.component.service';

@Component({
    selector: 'product_details',
    templateUrl: './Cart.component.html',
    styleUrls: ['./Cart.component.css']
})


export class CartComponent implements OnInit {

    Cart:any
    TotalAmountOfProduct:number = 0;
    TotalSaved:number = 0;
    msg:String
    id = localStorage['id']
    empty: boolean

    constructor(private service:CartService,
        private activateRoute:ActivatedRoute,
        private route:Router) {


        this.loadProduct()

     }

    loadProduct()
    {
        this.service.getCart(this.id).subscribe(response =>{
            if(response['status'] == 'success'){
                this.Cart = response['data']

                //TO GET TOTAL MONEY AND SAVING

                if(this.Cart.length == 0){
                    this.msg = 'Your cart is empty'
                    this.empty = true
                }
                else{
                    this.msg = 'Your items list'
                    this.empty = false
                }
                for(let i = 0;i < this.Cart.length;i++)
                {
                    this.TotalAmountOfProduct = this.TotalAmountOfProduct + parseFloat(this.Cart[i].totalAmount)
                    this.TotalSaved = this.TotalSaved + parseFloat(this.Cart[i].totalDiscount)

                }
                localStorage['TotalAmount'] = this.TotalAmountOfProduct
                localStorage['TotalDiscount'] = this.TotalSaved

            }
            else{
                console.log(response['error'])
            }
        })
    }

    onEdit(id:string,quantity:number) {
        localStorage['Quantity'] = quantity
        this.route.navigate(['/MRlogin/cartEdit/'+id])
    }

    onDelete(productId:string) {
        this.service.deleteCart(productId).subscribe(response =>{
            if(response['status'] == 'success'){
                this.loadProduct()
                location.reload();
            }
            else{
                console.log(response['error'])
            }
        })
    }

    onOrderPlace(){
            this.route.navigate(['/MRlogin/cart/placeorder'])
    }

    ngOnInit() {

        if(localStorage['login_status'] != '1'){
            alert('you are not logged in')
            this.route.navigate(['/MRlogin'])
        }
    }


}

