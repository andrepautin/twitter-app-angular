import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedComponent } from './feed/feed.component';
import { ProfileComponent } from './profile/profile.component';
import { TweetDetailsComponent } from './tweet-details/tweet-details.component';

const routes: Routes = [
  {path: '', redirectTo: '/feed', pathMatch: 'full'}, 
  {path: 'feed', component: FeedComponent}, 
  {path: 'tweets/:id', component: TweetDetailsComponent},
  {path: 'profile/:userName', component: ProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
