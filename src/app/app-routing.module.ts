import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedComponent } from './Components/feed/feed.component';
import { LoginComponent } from './Components/login/login.component';
import { NewUserComponent } from './Components/new-user/new-user.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { TweetDetailsComponent } from './Components/tweet-details/tweet-details.component';

const routes: Routes = [
  {path: '', redirectTo: '/feed', pathMatch: 'full'}, 
  {path: 'feed', component: FeedComponent}, 
  {path: 'tweets/:id', component: TweetDetailsComponent},
  {path: 'profile/:userName', component: ProfileComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: NewUserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
