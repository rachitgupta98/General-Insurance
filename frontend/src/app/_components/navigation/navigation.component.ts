import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Auth } from 'src/app/_guards/authGuard';
import { Session } from 'src/app/_services/Session';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  userId:any;
  userLogged: boolean = false;
  refreshed:boolean=false;
  auth:Auth;

  ngOnInit()
  {
    
    

  }
  


  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),

    );



  constructor(private breakpointObserver: BreakpointObserver) {
    
    console.log("session Check",sessionStorage.getItem('userId'))
    this.userId=sessionStorage.getItem('userId');
    
    // if(sessionStorage.getItem('userId')!=null && !this.refreshed)
    // {
    //   this.refreshed=true;
      
    //   //location.reload()
    //   this.userLogged=true;
      
    // }
    
    
   
    // else{
    //   this.userLogged=false;
    // }
  
 };




}
