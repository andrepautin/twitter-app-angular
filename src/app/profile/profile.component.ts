import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  isTyping: boolean = false;

  userProfile: any = {
    displayName: "Andre",
    userName: "NAP12",
    bio: "I like long walks on the beach",
    followers: 300,
    following: 300,
  }

  constructor(
    private userService: UserService, 
    private router: Router,
    private location: Location,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    if (this.userService.getCurrentUser() === "") {
      this.router.navigateByUrl("/login");
    }
  }

  userIsTyping() {
    this.isTyping = true;
  }

  sendTweet() {

  }

  goToHomePage() {
    this.router.navigateByUrl("/feed");
  }

  goBack() {
    this.location.back();
  }

  signOutUser() {
    this.router.navigateByUrl("/login");
  }
}
