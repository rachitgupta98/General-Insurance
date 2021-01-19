import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Auth } from 'src/app/_guards/authGuard';
import { Session } from 'src/app/_services/SessionValues';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  userName: string = "User";
  userId: any;
  session: Session = new Session();
  refreshed: boolean = false;

  constructor(private router: Router) {
    this.userName = sessionStorage.getItem('userName')
    this.userId=sessionStorage.getItem('userId')
    this.session.userId = sessionStorage.getItem('userId')
  }

  ngOnInit() {


    sessionStorage.removeItem('check')
    sessionStorage.removeItem('pay')
    sessionStorage.removeItem('downcheck')


  }

}
