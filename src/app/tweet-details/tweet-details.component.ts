import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-tweet-details',
  templateUrl: './tweet-details.component.html',
  styleUrls: ['./tweet-details.component.css']
})
export class TweetDetailsComponent implements OnInit {
  @ViewChild("userTweetInputRef") myUserTweetInputRef!: ElementRef;
  tweet: any = {
    id: 1,
    text: "hello world", 
    displayName: "Andre", 
    userName: "NAP12",
    timestamp: "01/01/21",
    likes: 40, 
    retweets: 22,
  }

  isTyping: boolean = false;

  constructor(private router: Router, private userService: UserService, private location: Location) { }

  ngOnInit() {
    if (this.userService.getCurrentUser() === "") {
      this.router.navigateByUrl("/login");
    }
  }

  handleClickUser(userName: string) {
    this.router.navigateByUrl("/profile/" + userName);
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
