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
const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];


@Component({
  selector: 'app-table',
  templateUrl: './claim-table.component.html',
  styleUrls: ['./claim-table.component.scss']
})


export class ClaimTableComponent implements OnInit {
   claim: Claim[]=[]
   claims:Claim[]=[]
   updateClaim:Claim=new Claim();
   claimapproval:adminApprove=new adminApprove();
   
  ngOnInit() {
  }

  constructor(private admin: ClaimPolicyService,private router: Router) {
    admin.fetchAllclaims().subscribe(response => {
      
      
      console.log("claim responseee",response)
     
      for(var i=0;i<response.result.length;i++)
    {
       this.claim.push(response.result[i]);
    }
    this.claims=this.claim.filter((e)=>e.claimStatus==='Pending from Admin')

    sessionStorage.setItem('pendingclaims',JSON.stringify(this.claims.length));
      });

      console.log(this.claim,"claimsss")
      
      console.log(this.claims,"claimss")
    
  }
   displayedColumns: string[] = ['claimId', 'claimReason', 'claimStatus', 'claimAmount', 'documentFile','approve','reject'];
  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  // dataSource = ELEMENT_DATA;
  
  show(claimId,doc)
  {
    let url=`http://127.0.0.1:8081/${doc}`

    window.open(url, "_blank");
  }

  claimStatus(claimId,claimStat:string)
  {
      
        
        
          this.claimapproval.claimStatus=claimStat;
          this.claimapproval.claimId=claimId;
          this.claimapproval.adminId=sessionStorage.getItem('adminId');
          console.log("claimapproval",this.claimapproval)
          this.admin.updateClaimstatus(this.claimapproval).subscribe(response=>{
        
            console.log(response,"Responsee..")

            if(response.status==200)
            {
              this.router.navigate(['/admin_login']).then(()=>{window.location.reload()})

            }
            
          })
        
      
      

  }

  




}
