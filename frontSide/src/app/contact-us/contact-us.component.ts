import { Component, OnInit } from '@angular/core';
import { ContactUsService } from './contact-us.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  name: string = ''
  email: string = ''
  message: string = ''
  service: ContactUsService

  constructor(private router: Router, contact:ContactUsService, private catservice:ContactUsService) 
  { this.service = contact}

  ngOnInit(): void {
  }

  addQuery() {
    
    if(this.name.length == 0)
    {
        alert('Enter Name')
    }
    else if(this.email.length == 0)
    {
        alert('Provide Email')
    }
    else if(this.message.length == 0)
    {
        alert('Enter your query')
    }
    else
    {
      
      this.service.addService(this.name,this.email, this.message).subscribe((response)=>{
          if(response['status']=='success')
          {
              alert('Query sent successfully')
              this.router.navigate(['/MRlogin/home'])
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
