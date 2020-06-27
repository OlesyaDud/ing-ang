import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/model/post.model';
import { PostService } from 'src/app/service/post.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts: Post[];
  post: Post;
  // post : Observable<Post[]>;
  AddPostFormGroup: FormGroup;

  constructor( private postService: PostService,
              private router: Router,
              private http: HttpClient,
              private formBuilder: FormBuilder,
              private toastr: ToastrService,) { 
                this.createForm();
              }

    createForm() {
      this.AddPostFormGroup = this.formBuilder.group({
        title: ['', Validators.required],
        description: ['', Validators.required],
        imageUrl: ['', Validators.required]


      })
    }


    deleteThisPost(id:number) {
      if(confirm("are  you sure you want to delete this post? ")) {
      this.postService.deletePost(id) 
    .subscribe( data => {
      this.toastr.success('Your comment is deleted!');
      this.posts;  
    });
      }
    }
    

      addPost() {
        this.postService.createPost(this.AddPostFormGroup.value).subscribe(
           data => {
            this.toastr.success('success!');
            this.post =data;
          }
        )
      }
  
  ngOnInit() {
    
    this.postService.getPosts().subscribe(data => {
      if(data != null){
          this.posts = data;
          // console.log(this.response);
      } 
    }, error => {
        console.log('Error ', error);
      }
    )}
        
  }




