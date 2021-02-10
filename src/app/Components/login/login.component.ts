import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../Services/user.service';

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
      // this.userService.setCurrentUser(userName);
      this.userService.login(userName).subscribe(
        response => {
          this.router.navigateByUrl("/feed");
        }, err => {
          console.log(err);
        }
      );
    }
  }

  signUp() {
    this.router.navigateByUrl("/signup");
  }

}
