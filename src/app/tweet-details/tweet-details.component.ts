import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

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
    userName: "NAP12",
    timestamp: "01/01/21",
    likes: 40, 
    retweets: 22,
  }

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    if (this.userService.getCurrentUser() === "") {
      this.router.navigateByUrl("/login");
    }
  }

  handleClickUser(userName: string) {
    this.router.navigateByUrl("/profile/" + userName);
  }

}
