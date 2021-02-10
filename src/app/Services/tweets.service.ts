import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TweetsService {

  constructor(private httpClient: HttpClient) { }

  getTweets(): Observable<any> {
    return this.httpClient.get("https://cabral-twitter-server-java.herokuapp.com/api/tweets");
  }

}
