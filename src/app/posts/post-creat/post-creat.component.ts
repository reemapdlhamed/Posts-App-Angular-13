import { Component, OnInit,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-post-creat',
  templateUrl: './post-creat.component.html',
  styleUrls: ['./post-creat.component.css'],
})
export class PostCreatComponent implements OnInit {
  enterdTitle = '';
  enterdContent = '';
  @Output()  postCreated = new EventEmitter()
  constructor() {}
  onAddPost() {
    const post = {
      title: this.enterdTitle,
      content: this.enterdContent,
    };
    this.postCreated.emit(post )
  }
  ngOnInit(): void {}
}
