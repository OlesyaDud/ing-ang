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

  posts: Post[];

  constructor( private postService: PostService,
              private router: Router,
              private http: HttpClient) { 
              }
  ngOnInit() {
         // Retrieve Posts
         this.postService.getPosts().subscribe(data => {
          this.posts = data; //data given to class variable posts
        });
  }


}


