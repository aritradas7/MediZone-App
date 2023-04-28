import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class AdminConsultationRequestsService {

    url='http://localhost:4000/Contact/allconsultrequests'
    url1='http://localhost:4000/Contact/approve'
    url2='http://localhost:4000/Contact/reject'

    constructor(private httpClient: HttpClient) { }
    
    getAllConsultationRequests()
    {      
        return this.httpClient.get(this.url)
    }
    approveRequest(id:string){
        
        const body = {
            id:id
        }
        return this.httpClient.post(this.url1,body)
    }

    rejectRequest(id:string){
        const body = {
            id:id
        }
        return this.httpClient.post(this.url2,body)
    }

}