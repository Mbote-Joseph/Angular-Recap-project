import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { User } from './User';
// import { User} from '/User.ts'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  users: User[] = [];

  LoginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  onSubmit() {
    console.log(this.LoginForm.value);
    this.users.push(this.LoginForm.value);
    console.log(this.users.length);
    console.log(this.users);
  }

  constructor() {}

  ngOnInit(): void {}
}
