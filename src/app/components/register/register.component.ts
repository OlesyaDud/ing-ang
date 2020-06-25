import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

   user: User;
   registerForm: FormGroup;
  
  constructor(
    private userService: UserService,
    private router: Router,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) { this.createForm(); }

  createForm(){
    this.registerForm = this.fb.group({
      uName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(14)]],
      email: ['', [Validators.required, Validators.pattern('^[A-Za-z0-9._%+-]+@[A-Za-z0-9._%+-]{2,}[.][A-Za-z]{2,}$')]],
      password: ['', Validators.required]  
    })
  }

  ngOnInit() {
  }

  // registerUser() {
  //   this.userService.postUser(this.registerForm.value).subscribe(
  //     async data => {
  //       this.toastr.success('success!');
  //       this.userService.postUser(this.user);
  //     }
  //   )
  // }

  registerUser() {
    this.user = new User();
    this.user.id = 0;

    this.userService.postUser(this.registerForm.value).subscribe(
       data => {
        if(data != null){
          this.toastr.success('User successfully created!');
        } else {
          alert('Error creating user');
          this.registerForm.reset();
        }    
        // this.userService.postUser(this.user);
      }
    )
  }

  // registerUser(){

  //   this.userService.postUser(this.user).subscribe(
  //     data => {
  //       if(data != null){
  //         console.log('Successfully created user');
  //         alert('User successfully created');
  //       } else {
  //         alert('Error creating user');
  //         this.registerForm.reset();
  //       }
  //       this.router.navigateByUrl('/profile');
  //     }, error => {
  //       console.log('Error ', error);
  //       this.registerForm.reset();
  //     }
  //   );
  // }

}
