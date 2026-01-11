import { Component } from '@angular/core';
import { Comment } from '../../models/comment';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html'
})
export class CommentsComponent {

  comments: Comment[] = [];
  name = '';
  message = '';

  addComment() {
    if (!this.name || !this.message) return;

    this.comments.push({
      name: this.name,
      message: this.message,
      date: new Date().toDateString()
    });

    this.name = '';
    this.message = '';
  }
}
