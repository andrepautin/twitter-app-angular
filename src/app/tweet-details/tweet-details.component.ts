import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tweet-details',
  templateUrl: './tweet-details.component.html',
  styleUrls: ['./tweet-details.component.css']
})
export class TweetDetailsComponent implements OnInit {
  tweet: any = {
    id: 1,
    text: "hello world", 
    displayName: "Andre", 
    userName: "@NAP12",
    timestamp: "01/01/21",
    likes: 40, 
    retweets: 22,
  }

  constructor(private router: Router) { }

  ngOnInit() {
  }

  handleClickUser(userName: string) {
    this.router.navigateByUrl("/profile/" + userName);
  }

}
