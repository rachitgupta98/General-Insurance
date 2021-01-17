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

  adminName = sessionStorage.getItem("adminName");
  adminId = sessionStorage.getItem("adminId");

  usercount = sessionStorage.getItem("userscount");
  policycount = sessionStorage.getItem("policycount");
  approvedClaims = sessionStorage.getItem("claimNo");
  pendingClaims = sessionStorage.getItem("pendingclaims");
  rejectedClaims = sessionStorage.getItem("rejectedclaims");

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
    if (sessionStorage.getItem("policycount") === null) {
      //window.location.reload()
    }
  }
  ngDoCheck() {
    this.pendingClaims = sessionStorage.getItem("pendingclaims");
  }
}
