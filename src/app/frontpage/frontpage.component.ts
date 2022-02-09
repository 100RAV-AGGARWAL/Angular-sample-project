import { Component, TemplateRef, ViewChild, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SignupformComponent } from '../signupform/signupform.component';
import { LoginformComponent } from '../loginform/loginform.component';
import { Router } from '@angular/router';

@Component({
  selector: 'front-page',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.css']
})
export class FrontpageComponent implements OnInit {
  isSignup = false;
  signup = {email: "", password: "", confirmPassword: ""};
  constructor(public dialog: MatDialog, public router: Router) { }
  ngOnInit(): void {
  }

  is_Signup() {
    return this.isSignup;
  }

  openSignup() {
    let dialogRef = this.dialog.open(SignupformComponent, {});
    dialogRef.afterClosed().subscribe(result => {
        if (result !== undefined) {
            if (result.email !== undefined) {
              if(result.password !== result.confirmPassword){
                alert("Passwords do not match");
              } else {
                console.log(result);
                this.signup = result;
                this.isSignup = true;
              }
            } else {
              console.log('User clicked no.');
            }
        }
    })
  }

  openLogin() {
    if(this.isSignup === true) {
      let dialogRef = this.dialog.open(LoginformComponent, {});
      dialogRef.afterClosed().subscribe(result => {
          if (result !== undefined) {
              if (result.email !== undefined) {
                if(result.email === this.signup.email && result.password === this.signup.password) {
                  console.log(result);
                  this.router.navigate(['dashboard']);
                } else {
                  alert("Incorrect email or password");
                }
              } else {
                console.log('User clicked no.');
              }
          }
      })
    } else {
      alert("Pls signup first")
    }
  }

}
