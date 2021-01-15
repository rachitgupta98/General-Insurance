import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Policy from 'src/app/_models/Policy';
import { Claim } from 'src/app/_models/sample/claim';
import { ClaimDto } from 'src/app/_models/sample/claimDto';

@Injectable({
  providedIn: 'root'
})
export class SampeService {
  public claimId:number;
  public policy:Policy;

  constructor(private http:HttpClient) { }
  getDetails(policyId:number):Observable<any>{
    return this.http.get("http://localhost:8080/insurance/renewPolicy?policyId="+policyId);
  }
  claim(claimDto:ClaimDto):Observable<any> {
    return this.http.post("http://localhost:8080/insurance/claimPolicy",claimDto);
  }
  picUpload(file:File,claimId:number):Observable<any>{
    const formdata:FormData=new FormData();
    formdata.append('file',file);
    return this.http.post("http://localhost:8080/documentUpload/"+claimId,formdata);
  }
}
