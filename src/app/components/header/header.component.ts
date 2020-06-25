import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( private router: Router,
    private userService: UserService) { }

  ngOnInit(){
  }

  toLogin(){
    if(this.userService.getCurrentUser() == null){
      console.log('Moving to Login Page');
      return this.router.navigateByUrl('/login');
    } else {
      alert('You are currently logged in as ' + this.userService.getCurrentUser().email + ". Please logout to change user");
    }
  }

  logout(){
    console.log(this.userService.getCurrentUser());
    if(this.userService.getCurrentUser() != null){
      this.userService.invalidateSession();
      alert("You have logged out");
      console.log(this.userService.getCurrentUser());
      
    } else {
      alert("You must be logged in to use this feature");
    }
    return this.router.navigateByUrl('/loginpage');
  }

  toRegister(){
    if(this.userService.getCurrentUser() == null){
      console.log('Moving to Register Page');
      return this.router.navigateByUrl('/register');
    } else {
      alert('You are currently logged in as ' + this.userService.getCurrentUser().email + ". Please logout to register");
    }
  }

}
