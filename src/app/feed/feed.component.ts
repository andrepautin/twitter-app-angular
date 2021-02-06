import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  @ViewChild("userTweetInputRef") myUserTweetInputRef!: ElementRef;
  isTyping: boolean = false;
  currentUser: string = "";

  tweets: any[] = [
    {
      id: 1,
      text: "hello world", 
      displayName: "Andre", 
      userName: "NAP12",
      timestamp: "01/01/21",
      likes: 40, 
      retweets: 22,
    },
    {
      id: 2,
      text: "hello there", 
      displayName: "Gab", 
      userName: "gaabsters",
      timestamp: "01/01/21",
      likes: 35, 
      retweets: 21,
    },
    {
      id: 3,
      text: "sugma", 
      displayName: "Andre", 
      userName: "napruto",
      timestamp: "01/01/21",
      likes: 80, 
      retweets: 45,
    },
  ];

  constructor(private router: Router, private userService: UserService, private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get("https://cabral-hero-server-java.herokuapp.com/api/heroes").subscribe(
      response => {
        console.log(response)
      }, err => {
        console.log(err);
      }
    );
    if (this.userService.getCurrentUser() === "") {
      this.router.navigateByUrl("/login");
    }
    this.currentUser = this.userService.getCurrentUser();
  }

  handleClickTweet(id: number) {
    this.router.navigateByUrl("/tweets/" + id);
  }

  handleClickUser(userName: string) {
    this.router.navigateByUrl("/profile/" + userName);
  }

  sendTweet() {
    let newTweet = this.myUserTweetInputRef.nativeElement.value;
    if (newTweet !== "") {
      this.isTyping = false;
      this.tweets.unshift({
        id: 0,
        text: newTweet,
        displayName: "NAME",
        userName: this.userService.getCurrentUser(),
        timestamp: "00/00/0000",
        likes: 0,
        retweets: 0,
      });
      this.myUserTweetInputRef.nativeElement.value = "";
    }
  }

  userIsTyping() {
    this.isTyping = true;
  }

  signOutUser() {
    this.router.navigateByUrl("/login");
  }
}
