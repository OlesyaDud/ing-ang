import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/model/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User[]; // list of users saved in a variable "users"
  
  constructor( private userService: UserService,
    private router: Router,
    private http: HttpClient) { 
    }

  ngOnInit(): void {

    // Retrieve Users
    this.userService.getUser().subscribe(data => {
    this.users = data;
    });

    //  getting a specific user
    // this.userService.getOneUser().subscribe(data => {
    //   this.users = data;
    // })
  }

}
