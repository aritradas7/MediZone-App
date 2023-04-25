import { Component, OnInit } from '@angular/core';
import { SingleUserService } from './user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  users: any[]
  service: SingleUserService
  
  constructor(userService: SingleUserService){
    this.service = userService;
    this.loadUserDtls();
  }
  
  
  loadUserDtls(){
    this.service.getUser().subscribe((response)=>{
      if(response['status']=='success')
      {
          this.users = response['data']
      }
      else{
          alert('error')
          console.log(response['error'])
      }
    }) 
  }

  ngOnInit() {
    
    
  }

}
