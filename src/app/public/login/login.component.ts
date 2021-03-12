import { AuthService } from './../../services/auth.service';
import { environment } from './../../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', './../public.component.scss']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: '',
      password: ''

    })
  }

  submit(): void {
    this.authService.login(this.form.getRawValue())
      .subscribe(() => this.router.navigate(['/']))
  }

}
