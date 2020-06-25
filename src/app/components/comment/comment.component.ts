import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { CommentService } from 'src/app/service/comment.service';

import {CommentService} from 'src/app/service/comment.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {Comment} from 'src/app/model/comment.model';
import { stringify } from 'querystring';
import { ToastrService  } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  id: Comment[];
  response: any;
  comment: Comment[];
  comments: Comment;
  AddCommentFormGroup: FormGroup;

    constructor(private commentService: CommentService,
      private router: Router,
      private formBuilder: FormBuilder,
      private toastr: ToastrService,
      private http: HttpClient) { 

         this.createForm();
      }

    createForm() {
      this.AddCommentFormGroup = this.formBuilder.group({
        text: ['', Validators.required]
      })
    }


    // adds comments
    addComment() {
      this.commentService.postComment(this.AddCommentFormGroup.value).subscribe(
        async data => {
          this.toastr.success('success!');
          this.commentService.postComment(this.comments);
        }
      )
    }

// delete comment

//  deleteThisComment(id: number) {    wooooorks
//    if(confirm("are  you sure you want to delete " + id + "?")) {
//      this.http.delete('http://localhost:8181/comment/' + id)
//      .subscribe(data => {
//        console.log("deleted");
//        this.id;
//      })
//    }
//  }

deleteThisComment(id:number) {
  if(confirm("are  you sure you want to delete this comment? ")) {
  this.commentService.deleteComment(id) 
.subscribe( data => {
  this.toastr.success('Your comment is deleted!');
  this.id;
  
});
  }
}

//  update comment
updateThisComment() {
  this.commentService.updateComment(this.comments).subscribe( data => {
  this.comments =data;
})
}
 

   ngOnInit() {
  //      // Retrieve Comments
    this.commentService.getAllComments().subscribe(data => {
      if(data != null){
          this.comment = data;
          // console.log(this.response);
      } 
    }, error => {
        console.log('Error ', error);
      }
    )
  
// update

// this.commentService.updateComment(this.comments).subscribe( data => {
//   this.comments =data;
// })

// ngOnInit ends here
  }

  }
