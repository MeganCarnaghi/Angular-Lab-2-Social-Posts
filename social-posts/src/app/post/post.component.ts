import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  @Input() post: Post | null = null;
  @Output() deleted = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  deletePost() {
    this.deleted.emit();
  }
}
