import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { Premium } from 'src/app/_models/premium';

@Component({
  selector: 'app-premiumcalculator',
  templateUrl: './premiumcalculator.component.html',
  styleUrls: ['./premiumcalculator.component.scss']
})
export class PremiumcalculatorComponent implements OnInit {
  premium = new Premium();
  vehicleType;
  registrationDate;
  finalDate;
  finalDate2;
  finalDate3;
  idvValue;
  numberOfYear;
  flag = false;
  minDate: Date;
  maxDate: Date;
  odValue;
  addonsValue: number = 0;
  //show:boolean=false;
  vehicleClass = ["2 Wheeler", "4 Wheeler"];
  addons = [{ type: 'Engine ProtectionCover', amount: 1000, checked: false },
  { type: 'Tyre ProtectionCover', amount: 2000, checked: false },
  { type: 'Passenger Cover', amount: 1500, checked: false },
  { type: 'Driver Cover', amount: 2500, checked: false },
  { type: 'Third Party cover', amount: 4500, checked: false }];
  vehicleBikeManufacturer = [
    { model: 'Hero Motocorp', price: '50000' },
    { model: 'Honda Motorcycle and Scooter', price: '60000' },
    { model: 'TVS Motor', price: '93000' },
    { model: 'Bajaj Auto', price: '75000' },
    { model: 'Yamaha Motor', price: '70000' },
    { model: 'Royal Enfield', price: '60000' },
    { model: 'suzuki Motorcycle', price: '80000' },
    { model: 'Mahindra Two Wheeler', price: '55000' },

  ];

  vehicleCarManufacturer = [
    { model: 'Ford', price: '500000' },
    { model: 'Honda', price: '350000' },
    { model: 'Hyundai', price: '700000' },
    { model: 'Mahindra & Mahindra', price: '900000' },
    { model: 'Maruti Suzuki', price: '400000' },
    { model: 'Nissan', price: '600000' },
    { model: 'Renault', price: '1000000' },
    { model: 'Tata Motors', price: '650000' },
    { model: 'Toyota', price: '700000' },
    { model: 'Volkswagen', price: '700000' }

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

  addonsAmount(i: number) {

    if (this.addons[i].checked) {
      this.addonsValue = this.addonsValue - (this.addons[i].amount)
      this.addons[i].checked = false;
    }
    else {
      this.addonsValue = this.addonsValue + this.addons[i].amount;
      this.addons[i].checked = true;
    }

    console.log("addons", this.addonsValue)

  }

  calculateIDV(f: NgForm) {
    if (f.valid) {
      this.flag = !this.flag;
      this.finalDate = this.registrationDate
      this.finalDate2 = this.finalDate.toString().split(" ");
      this.finalDate3 = new Date(
        this.finalDate2[0],
        this.finalDate2[1],
        this.finalDate2[2],
        this.finalDate2[3],
      );

      this.numberOfYear = new Date().getFullYear() - this.finalDate2[3];
      if (this.premium.vehicletype == "4 Wheeler") {
        if (this.numberOfYear < 0) {
          alert("your vehicle is not eligible for insurance");
        }
        if (this.numberOfYear == 0) {
          for (var i = 0; i < this.vehicleCarManufacturer.length; i++) {
            console.log(this.vehicleCarManufacturer[i]);
            if (this.vehicleCarManufacturer[i].model == this.premium.manufacturer) {
              this.idvValue = parseInt(this.vehicleCarManufacturer[i].price);
              this.odValue = 0.0197 * this.idvValue;

            }
          }
        }
        if (this.numberOfYear == 1) {
          for (var i = 0; i < this.vehicleCarManufacturer.length; i++) {
            console.log(this.vehicleCarManufacturer[i]);
            if (this.vehicleCarManufacturer[i].model == this.premium.manufacturer) {
              this.idvValue = parseInt(this.vehicleCarManufacturer[i].price) - (parseInt(this.vehicleCarManufacturer[i].price) * 0.1);
              this.odValue = 0.0197 * this.idvValue;
            }
          }
        }
        if (this.numberOfYear > 1 && this.numberOfYear < 3) {
          for (var i = 0; i < this.vehicleCarManufacturer.length; i++) {
            console.log(this.vehicleCarManufacturer[i]);
            if (this.vehicleCarManufacturer[i].model == this.premium.manufacturer) {
              this.idvValue = parseInt(this.vehicleCarManufacturer[i].price) - (parseInt(this.vehicleCarManufacturer[i].price) * 0.15);
              this.odValue = 0.0197 * this.idvValue;
            }
          }
        } if (this.numberOfYear > 2 && this.numberOfYear < 10) {
          for (var i = 0; i < this.vehicleCarManufacturer.length; i++) {
            console.log(this.vehicleCarManufacturer[i]);
            if (this.vehicleCarManufacturer[i].model == this.premium.manufacturer) {
              this.idvValue = parseInt(this.vehicleCarManufacturer[i].price) - (parseInt(this.vehicleCarManufacturer[i].price) * 0.2);
              this.odValue = 0.0197 * this.idvValue;
            }
          }
        }
        if (this.numberOfYear >= 10) {
          for (var i = 0; i < this.vehicleCarManufacturer.length; i++) {
            console.log(this.vehicleCarManufacturer[i]);
            if (this.vehicleCarManufacturer[i].model == this.premium.manufacturer) {
              this.idvValue = parseInt(this.vehicleCarManufacturer[i].price) - (parseInt(this.vehicleCarManufacturer[i].price) * 0.5);
              this.odValue = 0.0197 * this.idvValue;
            }
          }
        }

      } else {
        if (this.numberOfYear < 0) {
          this.flag = !this.flag;
          alert("Please Enter valid year");
        }
        if (this.numberOfYear == 0) {
          for (var i = 0; i < this.vehicleBikeManufacturer.length; i++) {
            console.log(this.vehicleBikeManufacturer[i]);
            if (this.vehicleBikeManufacturer[i].model == this.premium.manufacturer) {
              this.idvValue = parseInt(this.vehicleBikeManufacturer[i].price);
              this.odValue = 0.0197 * this.idvValue;
            }
          }
        }
        if (this.numberOfYear == 1) {
          for (var i = 0; i < this.vehicleBikeManufacturer.length; i++) {
            console.log(this.vehicleBikeManufacturer[i]);
            if (this.vehicleBikeManufacturer[i].model == this.premium.manufacturer) {
              this.idvValue = parseInt(this.vehicleBikeManufacturer[i].price) - (parseInt(this.vehicleBikeManufacturer[i].price) * 0.1);
              this.odValue = 0.0197 * this.idvValue;
            }
          }
        }
        if (this.numberOfYear > 1 && this.numberOfYear < 3) {
          for (var i = 0; i < this.vehicleBikeManufacturer.length; i++) {
            console.log(this.vehicleBikeManufacturer[i]);
            if (this.vehicleBikeManufacturer[i].model == this.premium.manufacturer) {
              this.idvValue = parseInt(this.vehicleBikeManufacturer[i].price) - (parseInt(this.vehicleBikeManufacturer[i].price) * 0.15);
              this.odValue = 0.0197 * this.idvValue;
            }
          }
        } if (this.numberOfYear > 2 && this.numberOfYear < 10) {
          for (var i = 0; i < this.vehicleBikeManufacturer.length; i++) {
            console.log(this.vehicleBikeManufacturer[i]);
            if (this.vehicleBikeManufacturer[i].model == this.premium.manufacturer) {
              this.idvValue = parseInt(this.vehicleBikeManufacturer[i].price) - (parseInt(this.vehicleBikeManufacturer[i].price) * 0.2);
              this.odValue = 0.0197 * this.idvValue;
            }
          }
        }
        if (this.numberOfYear >= 10) {
          for (var i = 0; i < this.vehicleBikeManufacturer.length; i++) {
            console.log(this.vehicleBikeManufacturer[i]);
            if (this.vehicleBikeManufacturer[i].model == this.premium.manufacturer) {
              this.idvValue = parseInt(this.vehicleBikeManufacturer[i].price) - (parseInt(this.vehicleBikeManufacturer[i].price) * 0.5);
              this.odValue = 0.0197 * this.idvValue;
            }
          }
        }
      }

      console.log(this.premium.manufacturer);
      console.log(this.idvValue);

      console.log(this.registrationDate.toString().split(" "));
      console.log(this.numberOfYear);
    }

    else {
      alert("enter all details");
      
    }


  }
}
