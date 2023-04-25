

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConsultDoctorComponent } from './consult-doctor.component';


@Injectable()
export class AddConsultationService {
    http: HttpClient
    url = 'http://localhost:4000/Contact/consult'   //express port 4000

    constructor(httpClient: HttpClient, private http1:HttpClient) {
        this.http = httpClient
    }

     
    addService( 
    patientname: string,
    healthproblem: string,
    phoneno: string,
    email: string, 
    city: string ,
    doctorname: string  
    )
    {
        
        const body = {
            patientname:patientname,
            healthproblem:healthproblem,
            phoneno:phoneno,
            email:email,
            city:city,
            doctorname:doctorname
        }

        return this.http.post(this.url, body)
    } //end of addservive
     
}