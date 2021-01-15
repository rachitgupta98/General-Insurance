import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Claim } from '../../_models/sample/claim';
import { ClaimDto } from '../../_models/sample/claimDto';
import { ClaimPolicyService } from '../../_services/claim-policy/claim-policy.service';
import { SampeService } from '../../_services/sample/sampe.service';

@Component({
  selector: 'app-claim-policy',
  templateUrl: './claim-policy.component.html',
  styleUrls: ['./claim-policy.component.scss']
})
export class ClaimPolicyComponent implements OnInit {
  claimDto=new ClaimDto();
  claim=new Claim();
  claimId:number;
  
  constructor(private sampleService:SampeService,private router:Router) { 
    

  }

  ngOnInit() {
    this.claimDto.userId=sessionStorage.getItem('userId');
  }
  
  claimPolicy(){
    console.log(sessionStorage.getItem('userId'))
    // this.claimDto.userId=140;
    //console.log(this.claimDto)
    this.sampleService.claim(this.claimDto).subscribe(
      data=>{
        console.log(data);
        if(data.status==200){
          this.claim=data.result;
          this.claimId=this.claim.claimId;
          alert("Claim raised, your claim ID is : "+this.claim.claimId+" and status is '"+this.claim.claimStatus+"'");
          this.sampleService.claimId=this.claimId;
          this.router.navigate(['docUpload']);
        }else{
          alert(data.message+" "+data.result.claimId+" is your claimId, pending from admin");
        }
      }
    );
    
  }
}
