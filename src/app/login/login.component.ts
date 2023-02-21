import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  username = "testName"
  password = ""
  errorMessage = "invalid credentials"
  invalidLogin = false

  // router 
  //dependency injection 
  constructor(private router : Router, 
    public hardcodedAuthenticationService: HardcodedAuthenticationService
    ){    
  }

  ngOnInit(): void {
  }

  handleLogin(){
    if(this.hardcodedAuthenticationService.authenticate(this.username,this.password)){
      this.router.navigate(['welcome',this.username])
      this.invalidLogin = false 
    } else{
      this.invalidLogin = true
    }
    console.log(this.username);
  }
}
