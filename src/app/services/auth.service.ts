import { User } from './../interfaces/user';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuth: boolean = false;

  constructor(protected http: HttpClient) { }

  login(data: any): Observable<any> {
    this.isAuth = true;
    console.log(this.isAuth)
    return this.http.post(`${environment.api}/login`, data, {
      withCredentials: true
    })
  }

  register(data: any): Observable<User> {
    return this.http.post<User>(`${environment.api}/register`, data)
  }

  user(): Observable<User> {
    return this.http.get<User>(`${environment.api}/user`)
  }

  logout(): Observable<void> {
    this.isAuth = false;
    console.log(this.isAuth)
    return this.http.post<void>(`${environment.api}/logout`, {})
  }
}
