import { Component, OnInit } from '@angular/core';
import { EditProductService } from './edit_product.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'edit_product-app',
    templateUrl: './edit_product.component.html',
    styleUrls: ['./edit_product.component.css']
})


export class Edit_productComponent implements OnInit {

  cat = []
  categoryid = 0
  name = ''
  price = 0
  discount = 0
  priceWithDiscount = 0
  doseInMG = 0
  mgfdate = null
  expiredate = null
  description = ''
  id: string


    constructor(
        private service: EditProductService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private catservice: EditProductService) {

            this.id = this.activatedRoute.snapshot.params['id']

            if(this.id)
            {
                this.service.getProductDetails(this.id).subscribe(response =>{
                    if(response['status']=='success')
                    {
            
                        const prd = response['data']

                        this.name = prd[0].name
                        this.price = prd[0].price
                        this.discount = prd[0].discount
                        this.priceWithDiscount = prd[0].priceWithDiscount
                        this.doseInMG = prd[0].doseInMG
                        this.mgfdate = prd[0].mgfdate
                        this.expiredate = prd[0].expiredate
                        this.description = prd[0].description
                    }
                    else{
                        console.log(response['error'])
                    }
                })
            }
         }

    ngOnInit() {
      this.loadCategories()
     }



    loadCategories(){
      this.catservice.getCategories().subscribe(response =>{
          if(response['status']=='success')
          {
              this.cat = response['data']
             
              if(this.cat.length > 0)
                this.categoryid = this.cat[0].id
          }
      })
  }


    onUpdate() {
        this.service
          .edit_Product(this.name, this.price, this.discount, this.priceWithDiscount, this.doseInMG, this.mgfdate, this.expiredate,this.description,this.categoryid, this.id)
          .subscribe(response => {
            if (response['status'] == 'success') {
                alert('product-updated')
              this.router.navigate(['/login/dashboard/product'])
            } else {
                console.log(response['error'])
                alert("error")
              //toastr.error(response['error'])
            }
          })
      }
}

