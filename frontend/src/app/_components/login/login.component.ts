import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../../_services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Login } from '../login';
import { Auth } from 'src/app/_guards/authGuard';
import { Session } from "src/app/_services/SessionValues";
import adminDto from 'src/app/_models/adminDto';
import { adminService } from 'src/app/_services/admin.service';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  login: Login = new Login();
  message: string;
  formGroup: FormGroup;
  admin: boolean = false;
  admindto: adminDto=new adminDto();






  session: Session;
  hide = true;
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private adminService:adminService,
    private router: Router,
    private route: ActivatedRoute
  ) { this.admin = route.snapshot.data['admin'] }





  ngOnInit() {

    if (sessionStorage.getItem('userId') !== null) {
      this.router.navigate(['/home'])
    }
    this.createForm();
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      useremail: [
        "",
        [
          Validators.required,
          Validators.pattern("[a-zA-Z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"),
        ],
      ],
      password: [
        "",
        [
          Validators.required,
          Validators.pattern(
            "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{7,}"
          ),
        ],
      ],
    });
  }
  getError(el) {
    switch (el) {
      case "user":
        if (this.formGroup.get("useremail").hasError("required")) {
          return "UserEmail required";
        } else if (this.formGroup.get("useremail").hasError("pattern")) {
          return "Incorrect pattern, pattern should be Email";
        }
        break;
      case "pass":
        if (this.formGroup.get("password").hasError("required")) {
          return "Password required";
        } else if (this.formGroup.get("password").hasError("pattern")) {
          return "Password must contain equal and greater than 8 characters, 1 upper case letter, and 1 special character";
        }
        break;
      default:
        return "incorrect";
    }
  }

  loginCheck() {

    if (this.admin) {
      this.admindto.adminEmail = this.formGroup.value.useremail;
      this.admindto.adminPassword = this.formGroup.value.password;

      console.log(this.admindto)
      this.adminService.adminlogin(this.admindto).subscribe((response)=>{
        console.log("Admin response",response);
        sessionStorage.setItem('adminId',response.result.adminId)
        sessionStorage.setItem('adminName',response.result.adminName)
      })
    }

    else {
      this.login.userEmail = this.formGroup.value.useremail;
      this.login.userPassword = this.formGroup.value.password;
      console.log(this.formGroup.value.useremail);
      console.log(this.formGroup.value.password);
      this.userService.login(this.login).subscribe((response) => {
        // alert(JSON.stringify(response));
        console.log(response);

        if (response.status == 200) {
          console.log("in success");

          sessionStorage.setItem("userId", response.result.userId);
          sessionStorage.setItem("userName", response.result.userName);


          this.router.navigate(['/home']).then(() => {
            window.location.reload();
          });;
        }
        else {
          this.message = response.message;
        }
        // this.router.navigate(["/home"]);

      })

    }

  }
}
