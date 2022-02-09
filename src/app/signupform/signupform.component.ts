import { Component, OnInit } from '@angular/core';
import { MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-signupform',
  templateUrl: './signupform.component.html',
  styleUrls: ['./signupform.component.css']
})
export class SignupformComponent implements OnInit {
  isSignup = false;
  details = {email: "", password: "", confirmPassword: ""};

  constructor(public dialogRef: MatDialogRef<SignupformComponent>) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
		this.dialogRef.close();
	}
}
