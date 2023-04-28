import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { UserQueriesService } from './user-queries.service';

@Component({
  selector: 'app-user-queries',
  templateUrl: './user-queries.component.html',
  styleUrls: ['./user-queries.component.css']
})
export class UserQueriesComponent implements OnInit {
  service: UserQueriesService
  queries: any[]

  constructor(private router: Router, qry: UserQueriesService) {
    this.service = qry
    this.getAllQueries()
  }

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

  getAllQueries() {
    this.service.getAllQueries().subscribe((response)=>{
        if(response['status']=='success')
        {
            this.queries = response['data']
        }
        else
        {
            console.log(response['error'])
            alert('error')
        }
    })
    
  }
}
