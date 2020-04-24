import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { PostService } from '../service/post.service';



@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  // comments: any;
  // posts:any;

  

  // constructor( private postService: PostService,
  //   private router: Router,
  //   private http: HttpClient) { }

//  ngOnInit() {
//   let resp = this.postService.getComment();
//   resp.subscribe((data)=>this.comments=data);
// }
}