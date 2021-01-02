import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  link:boolean=false;
  constructor() { }

  ngOnInit() {
  }
  displayLinks(){
    if(this.link==false){
      this.link=true;
    }else{
      this.link=false;
    }
  }
}
