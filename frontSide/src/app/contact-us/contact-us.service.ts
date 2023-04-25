

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContactUsComponent } from './contact-us.component';


@Injectable()
export class ContactUsService {
    http: HttpClient
    url = 'http://localhost:4000/Contact/query'   //express port 4000

    constructor(httpClient: HttpClient, private http1:HttpClient) {
        this.http = httpClient
     }

     
     addService( 
        name: string,
        email: string, 
        message: string
        ){
        
        const body = {
            name:name,
            email:email,
            message:message
        }

        return this.http.post(this.url, body)
    } //end of addservive
     
}