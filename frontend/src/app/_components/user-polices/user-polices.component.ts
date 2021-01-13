import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Policy from 'src/app/_models/Policy';
import { PolicyServiceService } from 'src/app/_services/policyService/policy-service.service';

@Component({
  selector: 'app-user-polices',
  templateUrl: './user-polices.component.html',
  styleUrls: ['./user-polices.component.scss']
})
export class UserPolicesComponent implements OnInit {

  policy:Policy[]=[];
  
  show: {[key: number]: boolean} = {};
  
  userId:any=sessionStorage.getItem('userId');
  constructor(private router:Router,policies:PolicyServiceService) {

    console.log(sessionStorage.getItem('userId'))
    
    if(sessionStorage.getItem('userId')==null)
    {
      this.router.navigate(['/user_login'])
    }
    else{
      
      console.log("userID...",this.userId)
      policies.findPolicyData(this.userId).subscribe(response=>{
        
        console.log(response,"responseee....")
         this.policy =response.result
        
        
        
      })      
    }
   }

  ngOnInit() {

   
  }
  Open(index:number)
  {
    
    if(this.show[index]===true)
    {
      this.show[index]=false;
    }
    else{
      this.show[index]=true;
    }
    
  }

}
