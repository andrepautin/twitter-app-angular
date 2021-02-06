import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeedComponent } from './feed/feed.component';
import { TweetDetailsComponent } from './tweet-details/tweet-details.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { NewUserComponent } from './new-user/new-user.component';

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
