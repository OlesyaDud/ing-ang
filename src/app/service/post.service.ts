import { Injectable } from '@angular/core';
import { Post } from '../model/post.model';
import { Subject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private posts: Post;


  headers={
    headers : new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) {
   }


 
   public getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>("http://localhost:8181/post");
  }

  public getPostById(){
    return this.http.get("http://localhost:8181/post/{pId}");
  }


// post
  public createPost(post: Post): Observable<Post>{
    return this.http.post<Post>('http://localhost:8181/post', post, this.headers);
  }

  // delete 
  public deletePost(id: number): Observable<Post> {
  return this.http.delete<Post>('http://localhost:8181/post/' + id, this.headers);
}


}

