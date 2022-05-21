import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Post } from '../post.model';
import { PostService } from '../post.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit, OnDestroy {
  // posts = [
  //   {
  //     title: 'my first post',
  //     content: 'content for first post',
  //   },
  //   {
  //     title: 'my first post',
  //     content: 'content for first post',
  //   },
  //   {
  //     title: 'my first post',
  //     content: 'content for first post',
  //   },
  // ];
  posts: Post[] = [];
  private postSub = new Subscription();
  constructor(public PostService: PostService) {}

  ngOnInit(): void {
    this.posts = this.PostService.getPosts();
    this.postSub = this.PostService.getPostUpdateListener().subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    );
  }
  //called when the component is about to remve and prevent memory leaks
  ngOnDestroy() {
    this.postSub.unsubscribe();
  }
}
