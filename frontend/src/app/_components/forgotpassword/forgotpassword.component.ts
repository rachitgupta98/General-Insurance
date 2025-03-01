import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Forgotpassword } from '../forgotpassword';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/_services/user.service';
import { MatSnackBar } from "@angular/material";


@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {

  forgotpassword: Forgotpassword = new Forgotpassword();
  formGroup: FormGroup

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      'useremail': [null, [Validators.required]],

    });
  }
  resetLink() {

    this.forgotpassword.userEmail = this.formGroup.value.useremail;

    localStorage.setItem('userEmail', this.formGroup.value.useremail);
    this.userService.forgotpassword(this.forgotpassword).subscribe(response => {
      this._snackBar.open("Email Sent", "Dismiss", {
        verticalPosition: "top",
      });
    })
  }
}
