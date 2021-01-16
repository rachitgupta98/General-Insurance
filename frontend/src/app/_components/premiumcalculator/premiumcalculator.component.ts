import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-premiumcalculator',
  templateUrl: './premiumcalculator.component.html',
  styleUrls: ['./premiumcalculator.component.scss']
})
export class PremiumcalculatorComponent implements OnInit {
  registrationYear;
  numberOfYear;
  
  models = [
    {model: 'Ford', price: '500000'},
    {model: 'Hero Motocorp', price: '300000'},
    {model: 'Honda', price: '350000'},
    {model: 'Hyundai', price: '700000'},
    {model: 'Mahindra & Mahindra', price: '900000'},
    {model: 'Maruti Suzuki',price: '400000'},
    {model: 'Nissan', price: '600000'},
    {model: 'Renault', price: '1000000'},
    {model: 'Tata Motors', price: '650000'},
    {model: 'Toyota', price: '700000'},
    {model: 'TVS XL 100', price: '800000'},
    {model: 'Tesla', price: '550000'},
    {model: 'Volkswagen', price: '700000'},
    {model: 'Yamaha', price: '200000'}
   ];
    
  constructor() { }

  ngOnInit() {
  }
   calculateIDV(){
  
   
    this.numberOfYear = new Date().getFullYear()-this.registrationYear;
    
   }
}
