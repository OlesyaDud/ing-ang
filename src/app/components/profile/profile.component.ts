import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/model/post.model';
import { User } from 'src/app/model/user.model';
import { Comment } from 'src/app/model/comment.model';
import { PostService } from 'src/app/service/post.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  // posts: Post;
  // users: User;
  // comments: Comment;

  posts: Post[];
  users: User[];
  comments: Comment[];


  viewMore = false;
  hideButton = false;

  
  constructor(private postService: PostService,
    private router: Router,
    private http: HttpClient) { }

  ngOnInit(): void {

     // Retrieve Posts
     this.postService.getPosts().subscribe(data => {
      this.posts = data;
    });

    // Retrieve Users
    this.postService.getUsers().subscribe(data => {
      this.users = data;
    });

    // Retrieve Comments
    this.postService.getComments().subscribe(data => {
      this.comments = data;
    });
  }

  viewMoreComments() {
    this.viewMore = true;
    this.hideButton = true;
  }

  }

