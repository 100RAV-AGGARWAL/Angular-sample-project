import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {

  details = {email: "", password: ""};

  constructor(public dialogRef: MatDialogRef<LoginformComponent>) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
		this.dialogRef.close();
	}
}
