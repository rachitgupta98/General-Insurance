import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PolicyServiceService } from 'src/app/_services/policyService/policy-service.service';
import { ClaimDto } from 'src/app/_models/sample/claimDto';

@Component({
  selector: 'app-claims',
  templateUrl: './claims.component.html',
  styleUrls: ['./claims.component.scss']
})
export class ClaimsComponent implements OnInit {

  userId: any = sessionStorage.getItem('userId');
  claim: ClaimDto[] = [];
  result: any[] = [];
  policyId: any = "";
  Status="pending From Admin";
  show: { [key: number]: boolean } = {};






  constructor(private router: Router, policies: PolicyServiceService) {

    if (sessionStorage.getItem('userId') == null) {
      this.router.navigate(['/user_login'])
    }
    else {

      console.log("userID...", this.userId)
      policies.findPolicyData(this.userId).subscribe(response => {

        console.log(response, "responseee....")
        this.result = response.result
        console.log(this.result, "errrr")
        for (var i = 0; i < this.result.length; i++) {
          this.policyId = this.result[i].policyId;
          console.log(this.result[i], "items")
          console.log("claims", i)
          this.claim.push(this.result[i].claims);
          this.claim[i].claimForPolicyId = this.result[i].policyId;
          this.claim[i].makerModel=this.result[i].vehicle.makerModel;
          console.log(this.claim, "lllll")


        }

      })
    }



  }

  ngOnInit() {

  }
  Open(index: number) {

    if (this.show[index] === true) {
      this.show[index] = false;
    }
    else {
      this.show[index] = true;
    }

  }
}
