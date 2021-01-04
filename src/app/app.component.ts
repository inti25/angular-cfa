import { Component } from '@angular/core';
import {AuthService} from './service/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-cfa';
  constructor(private authService: AuthService, private router: Router) {
  }

  logOut() {
    this.authService.logout();
    localStorage.removeItem('isAuthenticated');
    this.router.navigate(['/login']);
  }
}
