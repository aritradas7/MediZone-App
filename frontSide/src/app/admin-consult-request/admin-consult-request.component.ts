import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AdminConsultationRequestsService } from './admin-consult-request.service';

@Component({
  selector: 'app-admin-consult-request',
  templateUrl: './admin-consult-request.component.html',
  styleUrls: ['./admin-consult-request.component.css']
})
export class AdminConsultRequestComponent implements OnInit {

  service: AdminConsultationRequestsService
  consultReq: any[]

  constructor(private router: Router, consult: AdminConsultationRequestsService) { 
    this.service = consult
    this.getAdminConsultation()
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

  getAdminConsultation() {
    this.service.getAllConsultationRequests().subscribe((response)=>{
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

  onapprove(id:string){
    
    this.service.approveRequest(id).subscribe()
    location.reload()
  }

  onreject(id:string){
    this.service.rejectRequest(id).subscribe()
    location.reload()
  }

}
