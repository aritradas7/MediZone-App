import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class UserConsultationRequestsService {

    url='http://localhost:4000/Contact/userconsultrequests'

    constructor(private httpClient: HttpClient) { }
    
    getConsultationRequests()
    {      
        
        const body = {
            userid:localStorage['userid']
        }
        return this.httpClient.post(this.url,body)
    }

}