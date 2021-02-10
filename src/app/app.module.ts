import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeedComponent } from './Components/feed/feed.component';
import { TweetDetailsComponent } from './Components/tweet-details/tweet-details.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { LoginComponent } from './Components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { NewUserComponent } from './Components/new-user/new-user.component';

@NgModule({
  declarations: [					
    AppComponent,
      FeedComponent,
      TweetDetailsComponent,
      ProfileComponent,
      LoginComponent,
      NewUserComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
