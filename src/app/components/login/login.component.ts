import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }


  //Save the login state in local storage
  saveLogin(){
    console.log("haciendo login");
    localStorage.setItem('login', "ingresado");
    
  }

  

}
