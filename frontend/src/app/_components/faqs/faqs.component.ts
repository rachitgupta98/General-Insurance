import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss']
})
export class FaqsComponent implements OnInit {
  activebtn:boolean[]=[true,false,false,false,false];
  panelOpenState = false;
  topics:string[]=["Quick Facts","Premium","Cover","Claim","Policy"];
  constructor() { }

  ngOnInit() {
  }
  changeFaqs(i){
    var j;
    for(j=0;j<5;j++){
      this.activebtn[j]=false;
    }
    this.activebtn[i]=true;
  }

}
