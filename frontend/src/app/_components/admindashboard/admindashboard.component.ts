import { Component, OnInit, DoCheck } from "@angular/core";
import { map } from "rxjs/operators";
import { Chart } from "angular-highcharts";

import { Breakpoints, BreakpointObserver } from "@angular/cdk/layout";
import { donutChartOptions } from "./donutChartOptions";
import { ClaimPolicyService } from "src/app/_services/claim-policy/claim-policy.service";

@Component({
  selector: "app-admindashboard",
  templateUrl: "./admindashboard.component.html",
  styleUrls: ["./admindashboard.component.scss"],
})
export class AdmindashboardComponent implements OnInit {
  chart = new Chart(donutChartOptions);
  /** Based on the screen size, switch from standard to one column per row */
  // dashboard.component.js

  adminName;
  adminId;
  usercount;
  policycount;
  approvedClaims;
  pendingClaims;
  rejectedClaims;
  cardLayout = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return {
          columns: 2,
          miniCard: { cols: 1, rows: 1 },
          chart: { cols: 1, rows: 2 },
          tables: { cols: 2, rows: 4 },
        };
      }

      return {
        columns: 2,
        miniCard: { cols: 1, rows: 1 },
        chart: { cols: 1, rows: 2 },
        tables: { cols: 2, rows: 3 },
      };
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.adminName = sessionStorage.getItem("adminName");
    this.adminId = sessionStorage.getItem("adminId");
    this.usercount = sessionStorage.getItem("userscount");
    this.policycount = sessionStorage.getItem("policycount");
    this.approvedClaims = sessionStorage.getItem("claimNo");
    console.log("pending claimss",this.pendingClaims)
    this.pendingClaims = sessionStorage.getItem("pendingclaims");
    if(this.pendingClaims==null)
    {
      window.location.reload()
    }
    
    console.log("pending claimss2",this.pendingClaims)
    
    this.rejectedClaims = sessionStorage.getItem("rejectedclaims");
  }
}
