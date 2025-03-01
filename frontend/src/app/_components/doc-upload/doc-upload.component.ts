import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { SampeService } from "src/app/_services/sample/sampe.service";
import { MatSnackBar } from "@angular/material";

@Component({
  selector: "app-doc-upload",
  templateUrl: "./doc-upload.component.html",
  styleUrls: ["./doc-upload.component.scss"],
})
export class DocUploadComponent implements OnInit {
  documentPic: File;
  isDocument: boolean = false;
  claimId: any;
  constructor(
    private sampleService: SampeService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    if (sessionStorage.getItem("userId") == null) {
      this.router.navigate(["/user_login"]);
      return;
    }
  }
  onFileChange(event) {
    this.documentPic = event.target.files[0];
    this.isDocument = true;
  }
  upload() {

    this.claimId = this.sampleService.claimId;
    this.sampleService
      .picUpload(this.documentPic, this.claimId)
      .subscribe((response) => {
        this._snackBar.open("Document Uploaded", "Dismiss", {
          verticalPosition: "top",
        });
        this.router.navigate(["/home"]);
      });
  }
}
