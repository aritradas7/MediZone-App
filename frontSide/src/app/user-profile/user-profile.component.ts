import { Component, OnInit } from '@angular/core';
import { SingleUserService } from './user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  users: any[]
  service: SingleUserService

  dateofbirth: string
  phoneno: string
  email: string
  password: string

  constructor(private router: Router,userService: SingleUserService){
    this.service = userService;
    this.loadUserDtls();
  }


  loadUserDtls(){
    this.service.getUser().subscribe((response)=>{
      if(response['status']=='success')
      {
          this.users = response['data']
          this.dateofbirth = this.users[0].dob
          this.phoneno = this.users[0].phoneno
          this.email = this.users[0].email
          this.password = this.users[0].password
      }
      else{
          alert('error')
          console.log(response['error'])
      }
    })
  }
  editUser(){
    document.getElementById("edit").setAttribute("hidden", "hidden")
    document.getElementById("dob").removeAttribute("disabled")
    document.getElementById("phn").removeAttribute("disabled")
    document.getElementById("eml").removeAttribute("disabled")
    document.getElementById("pass").removeAttribute("disabled")
    document.getElementById("save").removeAttribute("hidden")
  }
  saveUser(){
    if(this.dateofbirth.length == 0){
      alert('Date of birth is required')
    }
    else if(this.phoneno.length == 0){
        alert('phone number is required')
    }
    else if(this.email.length == 0){
        alert('email is required')
    }
    else if(this.password.length ==0){
        alert('password is required')
    }
    else{
      this.service.saveUser(this.dateofbirth,this.phoneno,this.email,this.password).subscribe((response)=>{
        if(response['status']=='success')
        {
            alert('Profile Updated Successfully')
            document.getElementById("edit").removeAttribute("hidden")
            document.getElementById("dob").setAttribute("disabled","disabled")
            document.getElementById("phn").setAttribute("disabled","disabled")
            document.getElementById("eml").setAttribute("disabled","disabled")
            document.getElementById("pass").setAttribute("disabled","disabled")
            document.getElementById("save").setAttribute("hidden", "hidden")
            this.router.navigate(['/MRlogin/user-profile'])
        }
        else
        {
            console.log(response['error'])
            alert('error')
        }
      })
    }
  }

  ngOnInit() {


  }

}
