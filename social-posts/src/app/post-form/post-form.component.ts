import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from '../post';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css'],
})
export class PostFormComponent implements OnInit {
  @Output() submitted = new EventEmitter<Post>();

  showForm: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  submitPost(form: NgForm) {
    const newPost: Post = {
      title: form.value.title,
      thought: form.value.thought,
    };
    this.submitted.emit(newPost);
  }
}
