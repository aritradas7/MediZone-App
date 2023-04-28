import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';


@Injectable() 

export class UserEmailService {
  url = "http://localhost:4000/sendemail/"
  url1 = "http://localhost:4000/profile/"

  constructor(private httpClient: HttpClient,private route:Router){
  }

  ValidateUser(email: string){
    var link = this.url1 + email
    return this.httpClient.get(link).subscribe(response => {
        if (response['status'] == 'success') {
            if(response['data'][0]){
                alert('User Validated. Proceed for password reset.')
                document.getElementById('validate').setAttribute('hidden','hidden')
                document.getElementById('confirm').removeAttribute('hidden')
                document.getElementById('entry').setAttribute('disabled','disabled')
            }
            else{
                alert('No user is present with provided email id')
            }
          //this.loadAllProducts()
        } else {
          alert('Failed')
        }
    })
  }

  SendEmail(email: string) {
    var link = this.url + email
    return this.httpClient.get(link).subscribe(response => {
        if (response['status'] == 'success') {
          alert('Your new password has been sent to your registered email id.')
          this.route.navigate(['/MRlogin/'])
          //this.loadAllProducts()
        } else {
          alert('Failed')
        }
    })
    //location.href = link;
  }
}
