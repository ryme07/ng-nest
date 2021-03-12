import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss', './../public.component.scss']
})
export class RegisterComponent implements OnInit {
  firstName = '';
  lastName = '';
  email = '';
  password = '';
  passwordConfirm = '';

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  submit(): void {

    this.http.post(`${environment.api}/register`, {
      last_name: this.lastName,
      first_name: this.firstName,
      email: this.email,
      password: this.password,
      password_confirm: this.passwordConfirm
    }).subscribe(() => this.router.navigate(['/login']))
  }

}
