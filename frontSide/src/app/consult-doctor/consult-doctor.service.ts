

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConsultDoctorComponent } from './consult-doctor.component';


@Injectable()
export class AddConsultationService {
    http: HttpClient
    url = 'http://localhost:4000/Contact/consult'   //express port 4000
    url1 = 'http://localhost:4000/login/dashboard/dr'

    constructor(httpClient: HttpClient, private http1:HttpClient) {
        this.http = httpClient
    }

     
    addService( 
    patientname: string,
    healthproblem: string,
    phoneno: string,
    email: string, 
    city: string ,
    doctorname: string,
    appointmentdate: Date
    )
    {
        
        const body = {
            patientname:patientname,
            healthproblem:healthproblem,
            phoneno:phoneno,
            email:email,
            city:city,
            doctorname:doctorname,
            appointmentdate:appointmentdate
        }

        return this.http.post(this.url, body)
    } //end of addservive

    getDoctor()
    {
        return this.http1.get(this.url1)
    }
     
}