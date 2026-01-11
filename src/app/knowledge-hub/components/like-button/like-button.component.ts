import { Component } from '@angular/core';

@Component({
  selector: 'app-like-button',
  template: `<button (click)="like()">❤️ Like {{ count }}</button>`
})
export class LikeButtonComponent {
  count = 0;
  like() {
    this.count++;
  }
}
