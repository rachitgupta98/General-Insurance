import { Auth } from "src/app/_guards/authGuard";
import { Session } from "src/app/_services/SessionValues";

import { Component, OnInit } from "@angular/core";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Observable } from "rxjs";
import { map, shareReplay } from "rxjs/operators";
import { Router } from "@angular/router";

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.scss"],
})
export class NavigationComponent implements OnInit {
  userId: any;
  userLogged: boolean = false;
  refreshed: number = 0;
  userName: string = "";
  adminName:string="";
  session: Session = new Session();
  ref = 0;
  admin:boolean=false
  ngOnInit() {
    //
    // if(this.auth.userId!==null)
    // {
    //   this.userLogged=true;
    // }
  }

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map((result) => result.matches));

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router
  ) {
    
    if (sessionStorage.getItem("userId") !== null) {
      this.userLogged = true;
      this.userName = sessionStorage.getItem("userName");
    }
    if(sessionStorage.getItem("adminId")!==null){
      this.admin=true;
      this.adminName=sessionStorage.getItem('adminName')
    }
  }

  logOut() {
    sessionStorage.removeItem("userId");
    sessionStorage.removeItem("userName");
    sessionStorage.removeItem("regNo");
    sessionStorage.removeItem("vehicleId");
    sessionStorage.removeItem("model");
    sessionStorage.removeItem("policyId");
    sessionStorage.removeItem('adminName');
    sessionStorage.removeItem('adminId');

    sessionStorage.removeItem('userscount');
    sessionStorage.removeItem('policycount');
    sessionStorage.removeItem('claimNo');
    sessionStorage.removeItem('pendingclaims')
    sessionStorage.removeItem("manufacturer");
    this.userLogged = false;
    this.router.navigate(["/home"]).then(() => {
      location.reload();
    });
  }
}
