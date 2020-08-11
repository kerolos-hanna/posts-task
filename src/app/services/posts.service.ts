import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private http: HttpClient) {}

  //get all posts
  getAllPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  //get specific post by id
  getPost(id: number) {
    return this.http.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }

  //update the post
  updatePost(id: number, data: {}) {
    return this.http.put(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      data
    );
  }

  //delete the post
  deletePost(id: number) {
    return this.http.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }
}
