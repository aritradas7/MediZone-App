import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserEmailService } from './forgot-password.service';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  service: UserEmailService
  email: string


  constructor(private router: Router, eml: UserEmailService) { 
    this.service = eml
  }

  onconfirm()
  {
    this.service.SendEmail(this.email)
  }

  onvalidate(){
    this.service.ValidateUser(this.email)
  }

  ngOnInit(): void {
  }

}
