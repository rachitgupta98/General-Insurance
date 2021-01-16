import { Component, OnInit } from '@angular/core';
import { Resetpassword } from '../resetpassword';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

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
  constructor(private formBuilder:FormBuilder,private userService: UserService, private router: Router) { }
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
    console.log("in changepasssword"); 
    console.log(localStorage.getItem('userEmail'));
    if(this.formGroup.value.password===this.formGroup.value.confirmPassword){
   this.resetpassword.userEmail=localStorage.getItem('userEmail')
   this.resetpassword.userPassword=this.formGroup.value.password;
  // this.resetpassword.confirmPassword=this.formGroup.value.confirmPassword;
 // console.log(this.formGroup.value.password); 
    // if( this.resetpassword.password === this.changepassword.confirmPassword){
    this.userService.resetpassword(this.resetpassword).subscribe(response => {
     alert(JSON.stringify(response));
   //  console.log(response);
        console.log("password resetted");
        localStorage.removeItem('userEmail');
        this.router.navigate(['/login']);
    })
  }else{
    alert("Password does not match");
  }
}
}
