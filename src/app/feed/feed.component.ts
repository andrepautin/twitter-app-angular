import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
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

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    if (this.userService.getCurrentUser() === "") {
      this.router.navigateByUrl("/login");
    }
  }

  handleClickTweet(id: number) {
    this.router.navigateByUrl("/tweets/" + id);
  }

  handleClickUser(userName: string) {
    this.router.navigateByUrl("/profile/" + userName);
  }

}
