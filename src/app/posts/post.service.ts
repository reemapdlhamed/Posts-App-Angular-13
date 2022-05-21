import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { Subject } from 'rxjs';
//  we can replace injectable by importing this in app modile and adding it to the providers
@Injectable({
  providedIn: 'root',
})
export class PostService {
  private posts: Post[] = [];
  private postUpdate = new Subject<Post[]>();

  getPosts() {
    return [...this.posts];
  }
  //rxjs
  getPostUpdateListener() {
    return this.postUpdate.asObservable();
  }
  addPost(title: string, content: string) {
    const post: Post = { title: title, content: content };
    this.posts.push(post);
    //rxjs
    this.postUpdate.next([...this.posts]);
  }
  constructor() {}
}
