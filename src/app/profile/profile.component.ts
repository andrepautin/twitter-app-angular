import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userProfile: any = {
    displayName: "Andre",
    userName: "NAP12",
    bio: "I like long walks on the beach",
    followers: 300,
    following: 300,
  }

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    if (this.userService.getCurrentUser() === "") {
      this.router.navigateByUrl("/login");
    }
  }
}
