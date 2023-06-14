import { Component, OnInit } from '@angular/core';
import { Data } from './Data';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  data: Data[] = [];

  // Custom validator
  static passwordMatcher(
    control: AbstractControl
  ): { [key: string]: boolean } | null {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');

    if (!password || !confirmPassword) return null;
    if (password.value !== confirmPassword.value) {
      return { mismatch: true };
    }
    return null;
  }

  SignUpForm = new FormGroup(
    {
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required),
    },
    { validators: SignupComponent.passwordMatcher }
  );

  onSubmit() {
    if (this.SignUpForm.valid) {
      this.data.push(this.SignUpForm.value);
      console.log(this.SignUpForm.value);
      console.log(this.data.length);
      console.log(this.data);
      this.SignUpForm.reset();
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
