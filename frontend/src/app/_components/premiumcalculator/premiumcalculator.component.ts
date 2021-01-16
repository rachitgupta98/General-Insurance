import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-premiumcalculator',
  templateUrl: './premiumcalculator.component.html',
  styleUrls: ['./premiumcalculator.component.scss']
})
export class PremiumcalculatorComponent implements OnInit {
  registrationDate;
  finalDate;
  finalDate2;
  finalDate3;
  numberOfYear;
  numberOfMonth;
  minDate: Date;
  maxDate: Date;
 //show:boolean=false;
 typeOfVehicle;
  vehicleType=[{type:'Two wheeler' },
  {type:'Four wheeler'}
];

vehicleBikeManufacturer = [
   
    
    {model: 'Hero Motocorp', price: '50000'},
    {model: 'Honda Motorcycle and Scooter', price: '60000'},
    {model: 'TVS Motor', price: '93000'},
    {model: 'Bajaj Auto', price: '75000'},
    {model: 'Yamaha Motor', price: '70000'},
    {model: 'Royal Enfield', price: '60000'},
    {model: 'suzuki Motorcycle', price: '80000'},
    {model: 'Mahindra Two Wheeler', price: '55000'},

   ];
    
   vehicleCarManufacturer = [
    {model: 'Ford', price: '500000'},
    {model: 'Honda', price: '350000'},
    {model: 'Hyundai', price: '700000'},
    {model: 'Mahindra & Mahindra', price: '900000'},
    {model: 'Maruti Suzuki',price: '400000'},
    {model: 'Nissan', price: '600000'},
    {model: 'Renault', price: '1000000'},
    {model: 'Tata Motors', price: '650000'},
    {model: 'Toyota', price: '700000'},
    {model: 'Volkswagen', price: '700000'}
    
   ];
    
   constructor() {
   const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const currentDay = new Date().getDate();
    this.minDate = new Date(currentYear - 20, 0, 1);
    this.maxDate = new Date(currentYear, currentMonth, currentDay);
  }

  
  ngOnInit() {
   
  
  }

   calculateIDV(){
     
     
     // this.numberOfYear = this.finalDate2[0] - new Date().getFullYear();
     // this.numberOfMonth = this.finalDate2[1] - new Date().getMonth();
      console.log( this.registrationDate.toString().split(" ")); 
      console.log( this.typeOfVehicle);
  
      console.log( this.numberOfYear);
    
   }
}
