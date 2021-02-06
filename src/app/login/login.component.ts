import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild("userNameInputRef") myUserNameInputRef!: ElementRef;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    let userName = this.myUserNameInputRef.nativeElement.value;
    if (userName !== "") {
      this.userService.setCurrentUser(userName);
      this.router.navigateByUrl("/feed");
    }
  }

  signUp() {
    this.router.navigateByUrl("/signup");
  }

}
