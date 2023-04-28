import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AllOrderListService } from './AllOrderList.service';



@Component({
    selector: 'All-order-list',
    templateUrl: './AllOrderList.component.html',
    styleUrls: ['./AllOrderList.component.css']
})

export class AllOrderListComponent  {

    products: any[]
    mrid:number
    date:Date
   // status:String

    constructor(private router: Router,
        productservice: AllOrderListService,
        private service : AllOrderListService) {

         this.loadAllProducts()

    }

    onupdate(id: string, status: string) {
      this.service.updateProduct(id,status).subscribe(response => {
        if (response['status'] == 'success') {
          window.location.reload()
          if(status == 'Accepted'){
            document.getElementById('acceptbtn').setAttribute("hidden","hidden")
            document.getElementById('dispatchbtn').removeAttribute("hidden")
            document.getElementById('deliverbtn').setAttribute("hidden","hidden")
          }
          else if(status == 'Dispatched'){
            document.getElementById('acceptbtn').setAttribute("hidden","hidden")
            document.getElementById('dispatchbtn').setAttribute("hidden","hidden")
            document.getElementById('deliverbtn').removeAttribute("hidden")
          }
          else if(status == 'Delivered'){
            document.getElementById('acceptbtn').setAttribute("hidden","hidden")
            document.getElementById('dispatchbtn').setAttribute("hidden","hidden")
            document.getElementById('deliverbtn').setAttribute("hidden","hidden")
          }
          //this.loadAllProducts()
        } else {
          console.log(response['error'])
        }
      })
    }


    ondelete(id: number) {
      console.log(id)
      if(confirm('Are you sure to delete an item'))
      {
          this.service
            .deleteProduct(id)
            .subscribe(response => {
              if (response['status'] == 'success') {
                window.location.reload()
                //this.loadAllProducts()
              } else {
                console.log(response['error'])
              }
            })
        }
      }

      dashboard()
    {
        this.router.navigate(['/login/dashboard'])
    }


  loadAllProducts() {

    this.date = new Date()

    this.mrid = localStorage['id']
    this.service
      .getAllProducts()
      .subscribe(response => {
        if (response['status'] == 'success') {
          this.products = response['data']

        } else {
          alert('error')
        }
      })
  }

  statAccepted(product) {
    return product.status == 'Accepted';
  }
  statDispatched(product) {
    return product.status == 'Dispatched';
  }
  statDelivered(product) {
    return product.status == 'Delivered';
  }


  onlogout()
    {
        this.router.navigate(['/login'])
    }


}
