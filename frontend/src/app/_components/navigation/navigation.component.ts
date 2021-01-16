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
  session: Session = new Session();
  ref = 0;

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
    console.log("coming...");
    if (sessionStorage.getItem("userId") !== null) {
      this.userLogged = true;
      this.userName = sessionStorage.getItem("userName");
    }
    console.log(this.userLogged);
  }

  logOut() {
    sessionStorage.removeItem("userId");
    sessionStorage.removeItem("userName");
    sessionStorage.removeItem("regNo");
    sessionStorage.removeItem("vehicleId");
    sessionStorage.removeItem("model");
    sessionStorage.removeItem("policyId");
    sessionStorage.removeItem("manufacturer");
    this.userLogged = false;
    this.router.navigate(["/home"]).then(() => {
      location.reload();
    });
  }
}
