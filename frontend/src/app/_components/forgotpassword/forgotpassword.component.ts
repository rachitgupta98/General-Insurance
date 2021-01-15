import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Forgotpassword } from '../forgotpassword';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {

  forgotpassword: Forgotpassword = new Forgotpassword();
  formGroup: FormGroup

  constructor(private formBuilder:FormBuilder,private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      'useremail': [null, [Validators.required]],
      
    });
  }
  resetLink() {
    console.log("in console"); 
   this.forgotpassword.userEmail=this.formGroup.value.useremail;
  console.log(this.formGroup.value.email); 
    localStorage.setItem('userEmail',this.formGroup.value.useremail);
    this.userService.forgotpassword(this.forgotpassword).subscribe(response => {
     alert(JSON.stringify(response));
     console.log(response);
        console.log("email sent");
        //this.router.navigate(['/resetpassword']);
    })
  }
}
