import { Component, OnInit } from '@angular/core';
import { AddConsultationService } from './consult-doctor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consult-doctor',
  templateUrl: './consult-doctor.component.html',
  styleUrls: ['./consult-doctor.component.css']
})
export class ConsultDoctorComponent implements OnInit {

  patientname: string = ''
  healthproblem: string = ''
  phoneno: string = ''
  email: string = ''
  city: string = ''
  doctorname: string = ''
  service: AddConsultationService
    
  // constructor(private router: Router, consultservice: AddConsultationService,
  //       private catservice:AddConsultationService) {
  //           this.service = consultservice
  //       }

  constructor(private router: Router, consult:AddConsultationService, private catservice:AddConsultationService) 
  { this.service = consult}

  ngOnInit(): void {
  }
  addConsultation() {
    
    if(this.patientname.length == 0)
    {
        alert('Enter Patient Name')
    }
    else if(this.healthproblem.length == 0)
    {
        alert('Describe health Problem')
    }
    else if(this.phoneno.length == 0)
    {
        alert('Enter Mobile Number')
    }
    else if(this.email.length == 0)
    {
        alert('Enter Email')
    }
    else if(this.city.length == 0)
    {
        alert('Enter City')
    }
    else if(this.doctorname.length == 0)
    {
        alert('Enter Doctor Name')
    }
    else
    {
      
      this.service.addService(this.patientname,this.healthproblem, this.phoneno, this.email,
      this.city,this.doctorname).subscribe((response)=>{
          if(response['status']=='success')
          {
              alert('Consultation Request Submitted Successfully')
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
