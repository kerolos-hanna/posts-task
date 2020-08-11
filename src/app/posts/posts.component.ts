import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';

import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit, OnDestroy {
  postsSubscription: Subscription;
  posts: {};
  error: string = '';
  constructor(private http: HttpClient, private postsServices: PostsService) {}

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.postsSubscription = this.postsServices.getAllPosts().subscribe(
      (res: []) => {
        this.error = '';
        this.posts = res.slice(0, 10);
      },
      (err) => {
        this.error = 'there is an error during fetching posts';
      }
    );
  }

  ngOnDestroy() {
    this.postsSubscription.unsubscribe();
  }
}
