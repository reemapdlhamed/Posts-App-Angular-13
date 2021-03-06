import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from '../post.model';
import { PostService } from '../post.service';
@Component({
  selector: 'app-post-creat',
  templateUrl: './post-creat.component.html',
  styleUrls: ['./post-creat.component.css'],
})
export class PostCreatComponent implements OnInit {
  enterdTitle = '';
  enterdContent = '';
  // postCreated = new EventEmitter<Post>();
  constructor(public PostService: PostService) {}
  onAddPost(form: NgForm) {
    if (form.invalid) {
      return;
    }
    // const post: Post = {
    // title: this.enterdTitle
    // content: this.enterdContent
    // title: form.value.title,
    // content: form.value.content,
    // } ;
    // this.postCreated.emit(post);
    this.PostService.addPost(form.value.title , form.value.content);
    form.resetForm()
  }
  ngOnInit(): void {}
}
