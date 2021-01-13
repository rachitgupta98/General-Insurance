import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Claim } from 'src/app/_models/sample/claim';
import { ClaimDto } from 'src/app/_models/sample/claimDto';

@Injectable({
  providedIn: 'root'
})
export class SampeService {
  public claimId:number;

  constructor(private http:HttpClient) { }
  claim(claimDto:ClaimDto):Observable<any> {
    return this.http.post("http://localhost:8080/insurance/claimPolicy",claimDto);
  }
  // uploadFile( file: File , id : number ) : Observable<any>  
  // {  
  //   let url = this.baseUrl + "uploadImage/" + id ;  
  
  //   const formdata: FormData = new FormData();  
    
  //   formdata.append('file', file);  
   
  //   return this.http.post(url , formdata);  
  // } 
  picUpload(file:File,claimId:number):Observable<any>{
    const formdata:FormData=new FormData();
    formdata.append('file',file);
    return this.http.post("http://localhost:8080/documentUpload/"+claimId,formdata);
  }
}
