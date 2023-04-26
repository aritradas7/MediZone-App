import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-user-queries',
  templateUrl: './user-queries.component.html',
  styleUrls: ['./user-queries.component.css']
})
export class UserQueriesComponent implements OnInit {

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
