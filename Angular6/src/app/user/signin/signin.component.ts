import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import{ UserService} from '../../shared/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor( private userService : UserService, private router: Router) { }

  model ={
    email:'',
    password:''
  };
  emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  serverErrorMessages: string;


  onSubmit( form: NgForm){
    this.userService.login(form.value).subscribe(
      res =>{
        this.userService.setToken(res['token']);
        this.router.navigateByUrl('/userprofile');
      },
      err =>{
        this.serverErrorMessages= err.error.message;
      }
    );
  }
  
  ngOnInit() {

    if(this.userService.isLoggedIn())
      this.router.navigateByUrl('/userprofile');
  }


}
