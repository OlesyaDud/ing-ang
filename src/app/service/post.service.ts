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

  private user: User;

  constructor(private http: HttpClient) {

   }
 

  public getPosts(){
    return this.http.get("http://localhost:8181/post/getPosts");
  }

  // getAllPosts(post: Post): Observable<Post> {
  //   return this.http.get<Post>("http://localhost:8181/post");
  // }

  public getPostById(){
    return this.http.get("http://localhost:8181/post/postById/{id}");
  }
      

  public getUser(){
    return this.http.get("http://localhost:8181/user/userById/1");
  }

  public getUsers(){
    return this.http.get("http://localhost:8181/user/getUser");
  }


  public getComment() {
    return this.http.get('http://localhost:8181/comment/getComments');
  }

  // public getPost(posts: Post): Observable<Post[]>{
  //   let loginT = new LoginTemplate(user.email, user.password);
  //   return this.http.post<Property[]>(this.getUserPropertiesUrl,  JSON.stringify(loginT), this.headers);
  // }
      
}

