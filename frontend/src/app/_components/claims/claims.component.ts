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
  Status = "Pending from Admin";
  show: { [key: number]: boolean } = {};






  constructor(private router: Router, policies: PolicyServiceService) {

    if (sessionStorage.getItem('userId') == null) {
      this.router.navigate(['/user_login'])
    }
    else {


      policies.findPolicyData(this.userId).subscribe(response => {


        this.result = response.result

        for (var i = 0; i < this.result.length; i++) {
          this.policyId = this.result[i].policyId;

          this.claim.push(this.result[i].claims);
          this.claim[i].claimForPolicyId = this.result[i].policyId;
          this.claim[i].manufacturer = this.result[i].vehicle.manufacturer;
          this.claim[i].model = this.result[i].vehicle.model



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
