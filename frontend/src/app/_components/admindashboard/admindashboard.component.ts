import { Component, OnInit, DoCheck } from "@angular/core";
import { map } from "rxjs/operators";
import { Chart } from "angular-highcharts";

import { Breakpoints, BreakpointObserver } from "@angular/cdk/layout";
import { donutChartOptions } from "./donutChartOptions";
import { ClaimPolicyService } from "src/app/_services/claim-policy/claim-policy.service";
import { Router } from "@angular/router";

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
          miniCard: { cols: 2, rows: 1 },
          chart: { cols: 2, rows: 2 },
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

  constructor(private breakpointObserver: BreakpointObserver, private router: Router) { }

  ngOnInit() {
    if (sessionStorage.getItem('adminId') == null) {
      this.router.navigate(['/admin_login'])
      sessionStorage.removeItem('userscount');
      sessionStorage.removeItem('policycount');
      sessionStorage.removeItem('claimNo');
      sessionStorage.removeItem('pendingclaims')
      sessionStorage.removeItem("manufacturer");
      sessionStorage.removeItem("registrationDate");
      sessionStorage.removeItem("rejectedclaims");
    }
    else {
      this.adminName = sessionStorage.getItem("adminName");
      this.adminId = sessionStorage.getItem("adminId");
      this.usercount = sessionStorage.getItem("userscount");
      this.policycount = sessionStorage.getItem("policycount");
      this.approvedClaims = sessionStorage.getItem("claimNo");

      this.pendingClaims = sessionStorage.getItem("pendingclaims");
      if (this.pendingClaims == null) {
        window.location.reload()
      }

      this.rejectedClaims = sessionStorage.getItem("rejectedclaims");

    }

  }
}
