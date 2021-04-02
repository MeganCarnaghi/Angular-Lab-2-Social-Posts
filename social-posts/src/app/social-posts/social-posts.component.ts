import { Component, OnInit } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css'],
})
export class SocialPostsComponent implements OnInit {
  showForm: boolean = false;

  posts: Post[] = [
    {
      title: 'Thoughts on Gus',
      thought: 'Gus is the best dressed dog around.',
    },
    {
      title: 'Thoughts on Mexican Food',
      thought: 'Mexican food is the best kind of food there is.',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  // function to delete post from the posts array
  onDelete(i: number) {
    this.posts.splice(i, 1);
  }

  // function to submit a new post to the posts array
  onSubmit(post: Post) {
    this.posts.unshift(post);
    this.showForm = false;
  }

  // function to show form
  onShowForm() {
    this.showForm = !this.showForm;
  }
}
