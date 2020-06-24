import { Injectable } from '@angular/core';
import { Subject, Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

import { catchError, map, tap } from 'rxjs/operators'; //to catch errors

import {Comment} from 'src/app/model/comment.model';



@Injectable({
  providedIn: 'root'
})
export class CommentService {
  [x: string]: any;
 

postCommentUrl = 'http://localhost:8181/comment';
getCommentsUrl = 'http://localhost:8181/comment';
deleteCommentUrl ='http://localhost:8181/comment';
updateCommentUrl = 'http://localhost:8181/comment';


  headers={
    headers : new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  private handleError<Comment>(operation = 'operation', result?: Comment) {
    return (error: any): Observable<Comment> => {
      console.error(error);
      return of(result as Comment);
    };
  }


  constructor(private http: HttpClient) {
   }

//    get comments
  public getAllComments(): Observable<Comment[]> {
      return this.http.get<Comment[]>(this.getCommentsUrl)
      .pipe(
        //   catchError(this.handleError<Comment[]>('getAllComments', []))
        tap(),
      catchError(this.handleError<Comment[]>('getAllComments', []))
      );
  }


//   post comment

public postComment(comment: Comment): Observable<Comment> { 
    return this.http.post<Comment>(this.postCommentUrl, comment, this.headers);
  }


// delete comment
deleteComment(id: number): Observable<Comment> {
    return this.http.delete<Comment>('http://localhost:8181/comment/' + id, this.headers);
  }

// update
// updateComment(comment:Comment): Observable<Comment> {
//     return this.http.put<Comment>(this.updateCommentUrl, comment, this.headers);
// }

}