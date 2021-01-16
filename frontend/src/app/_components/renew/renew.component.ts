import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PolicyServiceService } from 'src/app/_services/policyService/policy-service.service';

@Component({
  selector: 'app-renew',
  templateUrl: './renew.component.html',
  styleUrls: ['./renew.component.scss']
})
export class RenewComponent implements OnInit {
  policyId:number;
  message:string;
  userId:any;
  constructor(private router:Router,private policyService:PolicyServiceService) { 
    
  }

  ngOnInit() {
    sessionStorage.removeItem("policyId");
  }
  renew(){
    
    if(sessionStorage.getItem("userId")==null){
      this.router.navigate(['user_login']);
    }
    else if(this.policyId==null||this.policyId<999){
      this.message="Enter the valid policyId";
    }
    else{
      this.userId=sessionStorage.getItem("userId");
      this.policyService.policyToRenew(this.policyId,this.userId).subscribe(
        data=>{
          if(data.status!=200){
            alert(data.message);
          }
          else{
            alert(data.message+data.result);
            sessionStorage.setItem("policyId",data.result.policyId);
            this.router.navigate(['policyForm']);
          }
        }
      )
    }
    //this.policyService.policyToRenew(this.)
  }

}
