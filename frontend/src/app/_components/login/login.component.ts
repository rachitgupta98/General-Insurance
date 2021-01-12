import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../../_services/user.service';
import { Router } from '@angular/router';
import { Login } from '../login';
import { Session } from 'src/app/_services/Session';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login: Login = new Login();
  message: string;
  formGroup: FormGroup;
  session: Session;



  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) {

  }


  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      'useremail': ['', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      'password': ['', [Validators.required, Validators.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}")]],
    });
  }
  getError(el) {
    switch (el) {
      case 'user':
        if (this.formGroup.get('useremail').hasError('required')) {
          return 'Username required';
        }
        else if (this.formGroup.get('useremail').hasError('pattern')) {
          return 'Incorrect pattern';
        }
        break;
      case 'pass':
        if (this.formGroup.get('password').hasError('required')) {
          return 'Password required';
        }

        else if (this.formGroup.get('password').hasError('pattern')) {
          return 'Password must contain more than 8 characters, 1 upper case letter, and 1 special character';
        }
        break;
      default:
        return 'incorrect';
    }
  }

  loginCheck() {
    this.login.userEmail = this.formGroup.value.useremail;
    this.login.userPassword = this.formGroup.value.password;
    console.log(this.formGroup.value.useremail);
    console.log(this.formGroup.value.password);
    this.userService.login(this.login).subscribe(response => {
      // alert(JSON.stringify(response));
      console.log(response);
      console.log("below alert");

      if (response.status == 200) {

        console.log("in success");


        sessionStorage.setItem('userId', response.result.userId);
        sessionStorage.setItem('userName', response.result.userName);


        this.router.navigate(['/home']);
      }
      else
        this.message = response.message;
    })
  }


}
