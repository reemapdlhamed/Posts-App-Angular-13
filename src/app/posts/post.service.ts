import { Injectable } from '@angular/core';
import { Post } from './post.model';
//  we can replace injectable by importing this in app modile and adding it to the providers
@Injectable({
  providedIn: 'root',
})
export class PostService {
  private posts: Post[] = [];
  getPosts() {
    return [...this.posts];
  }
  addPost(title: string, content: string) {
const post :Post= {title:title , content:content}
this.posts.push(post)

  }
  constructor() {}
}
