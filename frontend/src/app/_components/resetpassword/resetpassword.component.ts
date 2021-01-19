import { Component, OnInit } from '@angular/core';
import { Resetpassword } from '../resetpassword';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from "@angular/material";

import { Router } from '@angular/router';
import { UserService } from 'src/app/_services/user.service';


@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {

  resetpassword: Resetpassword = new Resetpassword();
  formGroup: FormGroup
  hide = true;
  hide1 = true;
  constructor(private formBuilder:FormBuilder,private userService: UserService, private router: Router,private _snackBar: MatSnackBar) { }
  ngOnInit() {
    this.createForm();
    if(localStorage.getItem('userEmail')==null){
      this.router.navigate(['/invalid']);
    }
  }
  createForm() {
    this.formGroup = this.formBuilder.group({
      'password': ['',  [Validators.required,  Validators.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}")]],
      'confirmPassword': ['',  [Validators.required,  Validators.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}")]],
    });
  }
  getError(el) {
    switch (el) {
      
      case 'pass':
        if (this.formGroup.get('password').hasError('required')) {
          return 'Password required';
        }
        
        else if(this.formGroup.get('password').hasError('pattern')){
          return 'Password must contain more than 8 characters, 1 upper case letter, and 1 special character';
        }
        break;
      default:
        return 'incorrect';
    }
  }
  
  resetPassword() {
    
    if(this.formGroup.value.password===this.formGroup.value.confirmPassword){
   this.resetpassword.userEmail=localStorage.getItem('userEmail')
   this.resetpassword.userPassword=this.formGroup.value.password;
    this.userService.resetpassword(this.resetpassword).subscribe(response => {
      if(response.status===200)
      { 
        this._snackBar.open("Password Updated ", "Dismiss", {
          verticalPosition: "top",
        });
        this.router.navigate(['/login']);
      }
        
    })
  }else{
    this._snackBar.open("Password didn't match", "Dismiss", {
      verticalPosition: "top",
    });
  }
}
}
