import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/Ilogin';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user = {} as User;
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }
  login(){
    this.user.mobileNumber = "9039907701";
    this.loginService.loggedIn.next(this.user);
    this.router.navigate(['/home']);
  }

}
