import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AppComponent  } from '../app.component';
import { HelloWorldBean, WelcomeDataService } from '../service/data/welcome-data.service';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit{
  
  message : String= "this is a message"
  welcomeMessage : String = "";
  name = ''

  constructor(
    private route : ActivatedRoute, 
    private welcomeDataService: WelcomeDataService
    ){
    this.name = this.route.snapshot.params['name'];
  }

  getCustomWelcomeMessage() {
    this.welcomeDataService.executeHelloWorldBeanService().subscribe(
      response => console.log(this.handleSuccessfulResponse(response))
      // error=> this.handleErrorResponse(error)
    );

    console.log("last line of get welcome");
  }

  getCustomWelcomeMessageWithParameter() {
    this.welcomeDataService.executeHelloWorldBeanServiceWithPathVariable(this.name).subscribe(
      response => console.log(this.handleSuccessfulResponse(response))
      // error=> this.handleErrorResponse(error)
    );

    console.log("last line of get welcome");
  }

  
  handleSuccessfulResponse(response : HelloWorldBean){

    this.welcomeMessage = response.message;
  }

  // handleErrorResponse(error : Object){
  //   this.welcomeMessage = error.error.message;
  // }

  ngOnInit(): void {   
    this.message = "dfgdfgdfg";
    // console.log(this.message);
  }

}
 