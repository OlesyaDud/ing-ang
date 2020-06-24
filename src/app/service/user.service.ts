import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { User } from '../model/user.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {


  private user: User;

  constructor(private http: HttpClient) {
   }

//    get comments
  public getUser(): Observable<any> {
    return this.http.get('http://localhost:8181/user');
  }

  // public getOneUser(): Observable<any> {
  //   let param1 = new HttpParams().set('id', '1');
  //   return this.http.get('http://localhost:8181/user', {params: param1});
  // }
 }