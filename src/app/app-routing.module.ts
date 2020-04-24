import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostComponent } from './components/post/post.component';
import { CommentComponent } from './comment/comment.component';



const routes: Routes = [
  {path: 'post', component: PostComponent},
  {path: 'comment', component: CommentComponent},
  { path: '', component: CommentComponent },
  { path: '**', redirectTo: 'post', pathMatch: 'full' }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//  export const routingComponents = [CommentComponent, PostComponent];