import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { User } from '../model/user.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userUrl: string;


  private user: User;

  headers={
    headers : new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) {
      this.userUrl = 'http://localhost:8181/user';
   }

//    get comments
  public getUser(): Observable<any> {
    return this.http.get('http://localhost:8181/user');
  }

  
  // save user
  public saveUser(user: User): Observable<User> {
    return this.http.post<User>('http://localhost:8181/user',  JSON.stringify(user), this.headers);
  }

  postUser(user: User): Observable<User> { 
    return this.http.post<User>(this.userUrl, user, this.headers);
  }

  // get currant user
  public getCurrentUser(): User{
    if(sessionStorage.getItem('currentUser') != null){
      return JSON.parse(sessionStorage.getItem('currentUser'));
    } else {
      return null;
    } 
  }

  public invalidateSession(){
    sessionStorage.clear();
  }

  //  logi in user
  public login(user: User): Observable<User> {
    return this.http.post<User>('http://localhost:8181/user', JSON.stringify(user), this.headers);
  }

  public saveCurrentUser(user: User){
    sessionStorage.setItem('currentUser', JSON.stringify(user));
  }

 }