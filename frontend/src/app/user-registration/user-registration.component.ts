import { Component, NgModule, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import User from '../_models/sample/user';

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

  onKey(e) {
    if (e.length >= 8) {
      this.islength = true;
    }
    else {
      this.islength = false;
    }

    // this.isCapital == e.toUpperCase() && e!= e.toLowerCase();
    var i = 0;
    while (i < e.length) {
      var character = e.charAt(i);
      if (character != /[\s~`!@#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?()\._]/) {
        if (!isNaN(character * 1)) {
          this.isCapital = false;
        } else {
          if (character == character.toUpperCase()) {
            this.isCapital = true;
          }
          else {
            this.isCapital = false;
          }
        }
      }

      i++;

    }

    this.isSpecial = /[\s~`!@#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?()\._]/g.test(e);
  }
  doRegister(f: NgForm) {
    if (f.valid) {
      alert("detailsEntered");
      alert(this.user);
      console.log(this.user);
    }
    else {
      alert("enter all details");
      console.log(this.user)
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
// var i=0;
//     while(i<e.length)
//     {
//       var character=e.charAt(i);
//       if (!isNaN(character * 1)){
//         this.isCapital=false;
//     }else{
//         if (character == character.toUpperCase()) {
//             this.isCapital=true;
//         }
//         else{
//           this.isCapital=false;
//         }
//     }

//     i++;

//     }