import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import adminDto from 'src/app/_models/adminDto';

@Component({
  selector: 'app-card',
  templateUrl: './dash-card.component.html',
  styleUrls: ['./dash-card.component.scss']
})
export class DashCardComponent implements OnInit {
  @Input() title: string;
  constructor() { }

  ngOnInit() {
  }

}


// card.component.ts



