import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-admin-consult-request',
  templateUrl: './admin-consult-request.component.html',
  styleUrls: ['./admin-consult-request.component.css']
})
export class AdminConsultRequestComponent implements OnInit {

  constructor(private router: Router) { }

  dashboard()
    {
        this.router.navigate(['/login/dashboard'])
    }

    onlogout()
    {
        this.router.navigate(['/login'])
    }

  ngOnInit(): void {
  }

}
