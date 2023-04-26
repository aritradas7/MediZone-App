import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocationStrategy } from '@angular/common';



@Component({
    selector: 'admin-login',
    templateUrl: './Adminlogin.component.html',
    styleUrls: ['./Adminlogin.component.css']
})

export class AdminloginComponent implements OnInit {
    email1 = ''
    password1 = ''

    constructor(private router: Router, location: LocationStrategy) { 
        history.pushState(null, null, window.location.href);  
        location.onPopState(() => {
        history.pushState(null, null, window.location.href);})
    }

    onlogin()
    {
        if(this.email1 == "reekparna" && this.password1 == "1234"){
            this.router.navigate(['/login/dashboard'])
        }
        else
        {
            alert('enter the vaild password')
        }

    }

    ngOnInit() { }
}
