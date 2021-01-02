import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss']
})
export class FaqsComponent implements OnInit {
  display:boolean[]=[false];
  displayList:boolean[]=[true,false,false,false,false];

  constructor() { }

  ngOnInit() {
  }
  changeDisplay(i){
    if(this.display[i]==true){ 
      this.display[i]=false;
    }else{
      var j;
    for(j=0;j<this.display.length;j++){
      this.display[j]=false;
    }
    this.display[i]=true;
    }
    
  }
  displaylist(i){
    var j;
    for(j=0;j<this.displayList.length;j++){
      this.displayList[j]=false;
    }
    this.displayList[i]=true;
  }
}
