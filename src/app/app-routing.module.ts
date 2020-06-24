import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostComponent } from './components/post/post.component';
import { CommentComponent } from './components/comment/comment.component';
import { ProfileComponent } from './components/profile/profile.component';
import { UserComponent } from './components/user/user.component';



const routes: Routes = [
  {path: 'post', component: PostComponent},
  {path: 'comment', component: CommentComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'user', component: UserComponent},
  { path: '', component: ProfileComponent },
  { path: '**', redirectTo: 'profile', pathMatch: 'full' }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//  export const routingComponents = [CommentComponent, PostComponent];