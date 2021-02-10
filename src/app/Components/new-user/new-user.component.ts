import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { UserService } from '../../Services/user.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  @ViewChild("newProfileNameInput") myNewProfileNameInput!: ElementRef;
  @ViewChild("newUserNameInput") myNewUserNameInput!: ElementRef;
  @ViewChild("newUserBioInput") myNewUserBioInput!: ElementRef;


  constructor(private router: Router, private location: Location, private userService: UserService) { }

  user: any = {
    profileName: "default",
    userName: "@default",
    bio: "default",
    Followers: 0,
    Following: 0,
  }

  ngOnInit() {
  }

  goBack() {
    this.router.navigateByUrl("/login");
  }

  handleNewAccount() {
    this.user.profileName = this.myNewProfileNameInput.nativeElement.value;
    this.user.userName = this.myNewUserNameInput.nativeElement.value;
    this.user.bio = this.myNewUserBioInput.nativeElement.value;
    this.userService.setCurrentUser(this.user.profileName);
    this.router.navigateByUrl("/feed");
  }

}
