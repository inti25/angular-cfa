import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../service/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.authService.userObservable.subscribe(user => {
      console.log('user', user);
    });
  }

  async login() {
    try {
      await this.authService.login('hungnq9.tcb@gmail.com', '!Q2w3e4r');
      this.authService.userObservable.subscribe(user => {
        if (user.isAnonymous === false) {
          localStorage.setItem('isAuthenticated', 'true');
          this.router.navigate(['/']);
        }
      });
    } catch (e) {
      console.log(e);
    }
  }

}
