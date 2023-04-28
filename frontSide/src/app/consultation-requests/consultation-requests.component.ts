import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { UserConsultationRequestsService } from './consultation-requests.service';

@Component({
  selector: 'app-consultation-requests',
  templateUrl: './consultation-requests.component.html',
  styleUrls: ['./consultation-requests.component.css']
})
export class ConsultationRequestsComponent implements OnInit {

  service: UserConsultationRequestsService
  consultReq: any[]

  constructor(private router: Router, consult:UserConsultationRequestsService) { 
    this.service = consult
    this.getUserConsultation()
  }

  ngOnInit(): void {
    
  }


  getUserConsultation() {
    this.service.getConsultationRequests().subscribe((response)=>{
        if(response['status']=='success')
        {
            this.consultReq = response['data']
        }
        else
        {
            console.log(response['error'])
            alert('error')
        }
    })
    
  }

}
