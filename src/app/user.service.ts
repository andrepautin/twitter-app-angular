import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private currentUser: string = "";

  constructor() { }

  getCurrentUser(): string {
    return this.currentUser;
  }

  setCurrentUser(userName: string) {
    this.currentUser = userName;
  }
}
