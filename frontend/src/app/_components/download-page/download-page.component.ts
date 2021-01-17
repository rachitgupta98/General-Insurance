import { Router } from "@angular/router";
import { PolicyServiceService } from "src/app/_services/policyService/policy-service.service";
import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  AfterViewInit,
  AfterContentInit,
  OnChanges,
} from "@angular/core";
// import { jsPDF } from "jspdf";
import { jsPDF } from "jspdf";

import html2canvas from "html2canvas";
@Component({
  selector: "app-download-page",
  templateUrl: "./download-page.component.html",
  styleUrls: ["./download-page.component.scss"],
})
export class DownloadPageComponent {
  viewState = false;
  userDataSource = {};
  policyDataSource = {};
  vehicleDataSource = {};
  //@ViewChild("main", { static: false }) content: ElementRef;
  constructor(
    private policyService: PolicyServiceService,
    private router: Router
  ) {
    this.policyService
      .downloadPolicyByPolicyId(sessionStorage.getItem("policyIdForDownload"))
      .subscribe((data) => {
        console.log(data.result);
        delete data.result.user["userId"];
        delete data.result.vehicle["vehicleId"];
        this.userDataSource = data.result.user;
        this.vehicleDataSource = data.result.vehicle;
        // delete data.result.claims;
        // delete data.result.user;
        // delete data.result.vehicle;
        this.policyDataSource = data.result;
      });
  }

  download() {
    this.viewState = true;
    var data = document.getElementById("main");
    html2canvas(data).then((canvas) => {
      var imgData = canvas.toDataURL("image/png");
      var doc = new jsPDF();
      var imgHeight = (canvas.height * 208) / canvas.width;
      doc.addImage(imgData, 0, 0, 208, imgHeight);
      doc.save("image.pdf");
      this.router.navigate(["/home"]);
    });
  }
}
