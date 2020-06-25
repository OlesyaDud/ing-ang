import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/model/user.model';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: FormGroup;
  submitted=false;
  user: User;

  constructor(
    private router: Router,
    private userService: UserService,
    private fb: FormBuilder
  ) {this.createForm();  }

  createForm(){
    this.login = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.submitted);
    console.log(this.login);
    this.userService.login(this.login.value).subscribe(

      async data => {
        if(data != null){
          this.user = new User();
          this.userService.saveCurrentUser(this.user);

          this.router.navigateByUrl('/profile');
        } else {
          alert("Invalid Credentials");
          
        }
      }, error => {
        alert('Invalid Credentials');
        console.log("Error", error);
      });
      
    }


}
