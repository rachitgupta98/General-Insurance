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
  constructor(
    private policyService: PolicyServiceService,
    private router: Router
  ) {
    if (sessionStorage.getItem("policyIdForDownload") == null) {
      this.router.navigate(["/home"]);
      return;
    } else {
      this.policyService
        .downloadPolicyByPolicyId(sessionStorage.getItem("policyIdForDownload"))
        .subscribe((data) => {

          delete data.result.user["userId"];
          delete data.result.vehicle["vehicleId"];
          this.userDataSource = data.result.user;
          this.vehicleDataSource = data.result.vehicle;
          this.policyDataSource = data.result;
        });
    }
  }

  download() {
    this.viewState = true;
    var data = document.getElementById("main");
    html2canvas(data).then((canvas) => {
      var imgData = canvas.toDataURL("image/png");
      var doc = new jsPDF();
      var imgHeight = (canvas.height * 208) / canvas.width;
      doc.addImage(imgData, 0, 0, 208, imgHeight);
      doc.save(`${sessionStorage.getItem("policyIdForDownload")}.pdf`);
      sessionStorage.removeItem("policyIdForDownload");
      this.router.navigate(["/home"]);
    });
  }
}
