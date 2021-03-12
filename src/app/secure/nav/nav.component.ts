import { User } from './../../interfaces/user';
import { AuthService } from './../../services/auth.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(private authService: AuthService) { }
  @Input('user') user!: User;

  ngOnInit(): void {
  }

  logout(): void {
    this.authService.logout().subscribe(() => console.log('success'))
  }


}
