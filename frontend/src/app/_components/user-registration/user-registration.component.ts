import { Component, NgModule, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import User from 'src/app/_models/sample/user';
import { UserService } from 'src/app/_services/user.service';


@Component({
  selector: 'user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})


export class UserRegistrationComponent implements OnInit {

  user: User = new User();
  islength = false;
  isCapital = false;
  isSpecial = false;
 states = [ 
   "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jammu and Kashmir",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttarakhand",
  "Uttar Pradesh",
  "West Bengal",
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli",
  "Daman and Diu",
  "Delhi",
  "Lakshadweep",
  "Puducherry"]


  onKey(e) {
    if (e.length >= 8) {
      this.islength = true;
    }
    else {
      this.islength = false;
    }

    // this.isCapital == e.toUpperCase() && e!= e.toLowerCase();
    var i = 0;
    var caps=0;
    while (i < e.length) {
      var character = e.charAt(i);
      if (character != /[\s~`!@#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?()\._]/) {
        if (!isNaN(character * 1)) {
          this.isCapital = false;
        } else {
          if (character == character.toUpperCase()) {
            this.isCapital = true;
            caps+1;
          }
          
        }
      }

      i++;
      

    }

    this.isSpecial = /[\s~`!@#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?()\._]/g.test(e);
  }
  

  constructor(private userService:UserService) { }

  ngOnInit() {
    


  }

  doRegister(f: NgForm) {
    if (f.valid) {
      alert("detailsEntered");
      
      console.log(this.user);
      this.userService.registration(this.user).subscribe(response=>{
        console.log(response);

      });
    } 
    else {
      alert("enter all details");
      console.log(this.user)
    }
  }

}


