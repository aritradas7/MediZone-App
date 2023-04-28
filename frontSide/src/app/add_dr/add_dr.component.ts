import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { AddUserService } from '../add_user/adduser.service';
import { AddDRService } from './adddr.service';

@Component({
    selector: 'add-dr',
    templateUrl: './add_dr.component.html',
    styleUrls : ['./add_dr.component.css']
})
    
export class Add_drComponent implements OnInit {
    name: string
    email: string
    phoneno: string
    degree: string


    service: AddDRService
    constructor(private router: Router,
        userservice: AddDRService) {
            this.service = userservice
         }

    back()
    {
        this.router.navigate(['/login/dashboard/drs'])
    }
    onadd()
    {
        this.service.addDR(this.name,this.email,
            this.phoneno,this.degree).subscribe((response)=>{
                if(response['status']=='success')
                {
                    alert('Doctor added successfully')
                    this.router.navigate(['/login/dashboard/drs'])
                }
                else
                {
                    console.log(response['error'])
                    alert('error')
                }
            })
    }

 

    ngOnInit() { }
}