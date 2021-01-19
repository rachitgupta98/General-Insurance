import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import adminApprove from 'src/app/_models/adminApprove';
import { Claim } from 'src/app/_models/sample/claim';
import { ClaimPolicyService } from 'src/app/_services/claim-policy/claim-policy.service';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
@Component({
  selector: 'app-table',
  templateUrl: './claim-table.component.html',
  styleUrls: ['./claim-table.component.scss']
})


export class ClaimTableComponent implements OnInit {
  claim: Claim[] = []
  claims: Claim[] = []
  rejectedclaims: Claim[] = [];
  updateClaim: Claim = new Claim();
  claimapproval: adminApprove = new adminApprove();

  ngOnInit() {
  }

  constructor(private admin: ClaimPolicyService, private router: Router) {


    admin.fetchAllclaims().subscribe(response => {


      

      for (var i = 0; i < response.result.length; i++) {
        this.claim.push(response.result[i]);
      }
      this.claims = this.claim.filter((e) => e.claimStatus === 'Pending from Admin')
      this.rejectedclaims = this.claim.filter((e) => e.claimStatus === "rejected")
      sessionStorage.setItem('rejectedclaims', JSON.stringify(this.rejectedclaims.length))
      sessionStorage.setItem('pendingclaims', JSON.stringify(this.claims.length));
      
    });

    

    

  }
  displayedColumns: string[] = ['claimId', 'claimReason', 'claimStatus', 'claimAmount', 'documentFile', 'approve', 'reject'];

  show(claimId, doc) {
    let url = `http://127.0.0.1:8081/${doc}`

    window.open(url, "_blank");
  }

  claimStatus(claimId, claimStat: string) {



    this.claimapproval.claimStatus = claimStat;
    this.claimapproval.claimId = claimId;
    this.claimapproval.adminId = sessionStorage.getItem('adminId');

    this.admin.updateClaimstatus(this.claimapproval).subscribe(response => {



      if (response.status == 200) {
        this.router.navigate(['/admin_login']).then(() => { window.location.reload() })

      }

    })




  }






}
