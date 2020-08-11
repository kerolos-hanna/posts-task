import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  id: number;
  title: string = 'loading...';
  body: string = 'loading...';
  success: string = '';
  error: string = '';
  constructor(
    private router: Router,
    private router2: ActivatedRoute,
    private postsService: PostsService
  ) {}

  ngOnInit(): void {
    this.id = this.router2.snapshot.params['id'];
    this.postsService.getPost(this.id).subscribe((postData: {}) => {
      this.title = postData['title'];
      this.body = postData['body'];
    });
  }

  Back() {
    this.router.navigate(['/']);
  }

  onUpdatePost(data: {}) {
    this.postsService.updatePost(this.id, data).subscribe(
      (post) => {
        this.error = '';
        this.success = 'the post is updated!';
        console.log(post);
      },
      (err) => {
        this.success = '';
        this.error = 'there is an error when updating!!!';
      }
    );
  }

  onDeletePost() {
    this.postsService.deletePost(this.id).subscribe(
      (post) => {
        this.error = '';
        this.success = 'the post is deleted!';
        console.log(post);
      },
      (err) => {
        this.success = '';
        this.error = 'there is an error when deleting!!!';
      }
    );
  }
}
