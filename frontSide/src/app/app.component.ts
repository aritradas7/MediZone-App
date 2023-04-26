import { Component } from '@angular/core';
import { CanActivate,Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LocationStrategy } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements CanActivate {


  title = 'MRTracker';
  isLoggedIn = false
  username:String
  search: String

  status = localStorage['login_status']

  constructor(private router:Router,private location: LocationStrategy)
  {
    this.loadStatus()
    
    
  }
  


  canActivate()
  {  
      this.loadStatus()
      return true
  }
 
  
  loadStatus()
  {
      if(this.status == '1')
      {
        this.isLoggedIn = true
        this.username = localStorage['username']
        history.pushState(null, null, window.location.href);  
        this.location.onPopState(() => {
        history.pushState(null, null, window.location.href);})
        
      }
  }

  

  onLogout()
  {
    if(confirm('Are you sure to log out'))
    {
      this.isLoggedIn = false
      localStorage['login_status'] = '0'
      localStorage['username'] = null
      localStorage['id'] = null
      history.pushState(null, null, window.location.href);  
        this.location.onPopState(() => {
        history.pushState(null, null, window.location.href);})
      this.router.navigate(['/MRlogin'])
      history.pushState(null, null, window.location.href);  
        this.location.onPopState(() => {
        history.pushState(null, null, window.location.href);})
    }
  }

  onSearch()
  {
    localStorage['searchValue'] = this.search

    this.router.navigate(['/MRlogin/search'])
  }

}

