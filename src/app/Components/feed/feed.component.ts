import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../Services/user.service';
import { TweetsService } from '../../Services/tweets.service';
import { Tweet } from 'src/app/Types/tweet';
import { finalize } from 'rxjs/operators';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  @ViewChild("userTweetInputRef") myUserTweetInputRef!: ElementRef;
  isTyping: boolean = false;
  currentUser: string = "";

  tweets: any[] = [];

  loading: boolean = false;

  constructor(private router: Router, private userService: UserService, private tweetsService: TweetsService) { }

  ngOnInit() {
    this.loading = true;
    this.userService.getCurrentUser().subscribe(
      response => { 
        this.currentUser = response.data;
        this.tweetsService.getTweets().pipe(
          finalize(() => {
            this.loading = false;
          })
        ).subscribe(
          response => {
            console.log(response)
            this.tweets = response.data;
          }, err => {
            console.log(err);
          }
        );
      }, err => {
        this.router.navigateByUrl("/login");
      }
    );
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
        displayName: this.userService.getCurrentUser(),
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
