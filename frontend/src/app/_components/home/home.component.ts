import { Component, OnInit } from '@angular/core';
import { Auth } from 'src/app/_guards/authGuard';
import { Session } from 'src/app/_services/Session';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  
 userName:string="User";
 userId:any;
 auth:Auth
  constructor() { 
    console.log("session Check",sessionStorage.getItem('userId'))
    this.userName=sessionStorage.getItem('userName')
    
    
  }
  
  ngOnInit() {

    
  }

}
