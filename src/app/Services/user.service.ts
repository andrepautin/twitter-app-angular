import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private currentUser: string = "";

  constructor(private httpClient: HttpClient) { }

  getCurrentUser(): Observable<any> {
    return this.httpClient.get("https://cabral-twitter-server-java.herokuapp.com/api/currentUser");
  }

  setCurrentUser(userName: string) {
    this.currentUser = userName;
  }

  login(userName: string) {
    return this.httpClient.post("https://cabral-twitter-server-java.herokuapp.com/api/login", {"userName": userName});
  }
}
