import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeedComponent } from './feed/feed.component';
import { TweetDetailsComponent } from './tweet-details/tweet-details.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [			
    AppComponent,
      FeedComponent,
      TweetDetailsComponent,
      ProfileComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
