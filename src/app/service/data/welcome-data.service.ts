import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core';

export class HelloWorldBean {
  constructor(public message: string) {
  }

}
@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    public http: HttpClient
  ) { }

  executeHelloWorldBeanService() {
    return this.http.get<HelloWorldBean>("http://localhost:8080/bean");
    // console.log("Execute Hello world bean service");
  }

  executeHelloWorldBeanServiceWithPathVariable(name: any) {

    let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();
    let header = new HttpHeaders({
      Authorization : basicAuthHeaderString
    })

    return this.http.get<HelloWorldBean>(`http://localhost:8080/bean/variable/${name}`);
    // {headers:header});
    // console.log("Execute Hello world bean service");
  }


  createBasicAuthenticationHttpHeader() {
    let username = "user"
    let password = "password"
    let basicAuthHeaderString = 'Basic' + window.btoa(username + ":" + password);
    return basicAuthHeaderString;
  }

}
// Access to XMLHttpRequest at 'http://localhost:8080/login' (redirected from 'http://localhost:8080/bean/variable/testName') from origin 'http://localhost:4200' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.