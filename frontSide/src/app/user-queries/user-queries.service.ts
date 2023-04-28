import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class UserQueriesService {

    url='http://localhost:4000/Contact/allqueries'

    constructor(private httpClient: HttpClient) { }
    
    getAllQueries()
    {      
        return this.httpClient.get(this.url)
    }

}