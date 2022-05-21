import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../post.model';
import { PostService } from '../post.service';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit {
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
  @Input() posts: Post[] = [];
  constructor(public PostService: PostService) {}

  ngOnInit(): void {}
}
