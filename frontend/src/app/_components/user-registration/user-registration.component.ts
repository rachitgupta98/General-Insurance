import { Component, NgModule, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import User from 'src/app/_models/sample/user';
import { Router } from '@angular/router'
import { UserService } from 'src/app/_services/user.service';


@Component({
  selector: 'user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})


export class UserRegistrationComponent implements OnInit {

  user: User = new User();
  userId: any = sessionStorage.getItem('userId')


  islength = false;
  isCapital = false;
  isSpecial = false;
  password = true;
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
    var caps = 0;
    while (i < e.length) {
      var character = e.charAt(i);
      if (character != /[\s~`!@#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?()\._]/) {
        if (!isNaN(character * 1)) {
          this.isCapital = false;
        } else {
          if (character == character.toUpperCase()) {
            this.isCapital = true;
            caps + 1;
          }

        }
      }

      i++;


    }
    if (caps > 1) {
      this.isCapital = true;
    }


    this.isSpecial = /[\s~`!@#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?()\._]/g.test(e);
  }


  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {

    console.log(this.userId, "Id...")

    if (this.userId) {
      this.router.navigate(['/updateprofile'])
      this.userService.update(this.userId).subscribe(response => {
        console.log(response, "updating response");
        this.password = false;
        this.user.userName = response.result.userName;
        this.user.userEmail = response.result.userEmail;
        this.user.userCity = response.result.userCity;
        this.user.userState = response.result.userState;
        this.user.pinCode = response.result.pinCode;
        this.user.userPhone = response.result.userPhone;
        this.user.userAddress = response.result.userAddress;
        this.user.userPassword = response.result.userPassword;

      })
    }


  }

  doRegister(f: NgForm) {
    if (f.valid) {



      console.log(this.user);

      if (this.userId) {
        this.user.userId = this.userId;
        this.userService.registration(this.user).subscribe(response => {
          console.log(response);
          if (response.status == 200) {
            alert("details updated successfully");
            sessionStorage.setItem('userName',response.result.userName);
            this.router.navigate(['/home']).then(() => {
              window.location.reload();
            });;
          }
        })
      }
      else {


        this.userService.registration(this.user).subscribe(response => {
          console.log(response);

          if (response.status == 200) {
            alert("Registration Successfull");
            this.router.navigate(['/user_login']);

          }


        })
      };

    }
    else {
      alert("enter all details");
      console.log(this.user)
    }
  }

}


