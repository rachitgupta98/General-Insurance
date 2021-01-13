import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  userName=sessionStorage.getItem('userName');
  logged:boolean=false;
  constructor(private router: Router) { }

  ngOnInit() {
    if(sessionStorage.getItem('userId')!==null)
    {
      this.logged=true;

    }
    else{
      this.router.navigate(['/user_login'])
    }
  }

  

}
