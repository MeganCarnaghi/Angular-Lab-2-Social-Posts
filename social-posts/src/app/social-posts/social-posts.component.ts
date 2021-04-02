import { Component, OnInit } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css'],
})
export class SocialPostsComponent implements OnInit {
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
}
