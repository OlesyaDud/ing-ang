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

  private comment: Comment;

  constructor(private http: HttpClient) {
   }
 
   public getPosts(): Observable<any> {
    return this.http.get("http://localhost:8181/post");
  }

  public getUsers(): Observable<any> {
    return this.http.get("http://localhost:8181/user");
  }

  public getComments(): Observable<any> {
    return this.http.get('/localhost:8081/comment');
  }
// ----------------------------

// public addUser() {
//   return this.http.post();
// }


// post--------------------
  // public getPosts(){
  //   return this.http.get("http://localhost:8181/post");
  // }

  public getPostById(){
    return this.http.get("http://localhost:8181/post/{pId}");
  }

 
      
// user -------------------------
  // public getUser(){
  //   return this.http.get("http://localhost:8181/user/{id}");
  // }

  // public getUsers(){
  //   return this.http.get("http://localhost:8181/user");
  // }


  public getComment() {
    return this.http.get('http://localhost:8181/comment');
  }

  // public getPost(posts: Post): Observable<Post[]>{
  //   let loginT = new LoginTemplate(user.email, user.password);
  //   return this.http.post<Property[]>(this.getUserPropertiesUrl,  JSON.stringify(loginT), this.headers);
  // }
      
}

