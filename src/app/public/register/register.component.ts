import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  firstName = '';
  lastName = '';
  email = '';
  password = '';
  passwordConfirm = '';

  constructor() { }

  ngOnInit(): void {
  }

  submit(): void {
    console.log({

      last_name: this.lastName,
      first_name: this.firstName,
      email: this.email,
      password: this.password,
      password_confirm: this.passwordConfirm
    })
  }

}
