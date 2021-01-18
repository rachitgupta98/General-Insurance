import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { ClaimPolicyService } from "src/app/_services/claim-policy/claim-policy.service";

@Component({
  selector: "app-claim-status",
  templateUrl: "./claim-status.component.html",
  styleUrls: ["./claim-status.component.scss"],
})
export class ClaimStatusComponent implements OnInit {
  claimId: number;
  message: String;
  msg: boolean = false;
  errmsg: String = "Enter the valid claim Id";
  err: Boolean = false;
  constructor(
    private claimService: ClaimPolicyService,
    private router: Router
  ) {}

  ngOnInit() {
    if (sessionStorage.getItem("userId") == null) {
      this.router.navigate(["/user_login"]);
      return;
    }
  }
  changeMsg() {
    this.msg = false;
  }
  checkStatus() {
    if (this.claimId < 10000) {
      this.err = true;
    } else {
      this.err = false;
      this.claimService.checkStatus(this.claimId).subscribe((data) => {
        if (data.result == null) {
          alert("No claim found for this Id");
        } else {
          this.message = data.result.claimStatus;
          this.msg = true;
        }
      });
    }
  }
}
