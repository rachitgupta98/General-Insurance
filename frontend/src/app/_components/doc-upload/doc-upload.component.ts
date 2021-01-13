import { Component, OnInit } from '@angular/core';
import { SampeService } from 'src/app/_services/sample/sampe.service';

@Component({
  selector: 'app-doc-upload',
  templateUrl: './doc-upload.component.html',
  styleUrls: ['./doc-upload.component.scss']
})
export class DocUploadComponent implements OnInit {
  documentPic:File;
  isDocument:boolean=false;
  claimId:any;
  constructor(private sampleService :SampeService) { }

  ngOnInit() {
  }
  onFileChange(event){
    this.documentPic=event.target.files[0];
    this.isDocument=true;
  }
  upload(){
    // console.log(this.sampleService.claimId);
     this.claimId=this.sampleService.claimId;
    // let formData: FormData = new FormData();
    // formData.append('claimId', this.claimId);
    // formData.append('profilePic', this.documentPic);
    this.sampleService.picUpload(this.documentPic,this.claimId).subscribe(response => {
      alert(JSON.stringify(response));
    });
  }

}
