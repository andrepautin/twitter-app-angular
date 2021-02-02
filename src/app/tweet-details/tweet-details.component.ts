import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tweet-details',
  templateUrl: './tweet-details.component.html',
  styleUrls: ['./tweet-details.component.css']
})
export class TweetDetailsComponent implements OnInit {
  tweet: any = {
    id: 1,
    text: "hello world", 
    user: "Andre", 
    timestamp: "01/01/21",
    likes: 40, 
    retweets: 22,
  }

  constructor() { }

  ngOnInit() {
  }

}
