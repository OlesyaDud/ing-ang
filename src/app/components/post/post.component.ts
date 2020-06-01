import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/model/post.model';
import { PostService } from 'src/app/service/post.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';





@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts: any;
  user:any;

  comments: any;

  constructor( private postService: PostService,
              private router: Router,
              private http: HttpClient) { 
              }

  ngOnInit() {
  let resp = this.postService.getPosts();
  resp.subscribe((data)=>this.posts=data);
  // get post by id
  let res = this.postService.getPostById();
  res.subscribe((p)=>this.posts=p);


  // get user
  // let resp1 = this.postService.getUser();
  // resp1.subscribe((us)=>this.user=us);
  let resp2 = this.postService.getUsers();
  resp2.subscribe((uy)=>this.user=uy);

  let re = this.postService.getComment();
  re.subscribe((data)=>this.comments=data);
  }

  isCollapsed: boolean = true;
  coms =Post;
  toggleCollapse() {
    this.isCollapsed =!this.isCollapsed;
  }

}


