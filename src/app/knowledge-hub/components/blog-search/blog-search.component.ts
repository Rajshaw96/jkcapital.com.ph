import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-blog-search',
  templateUrl: './blog-search.component.html'
})
export class BlogSearchComponent {

  @Output() search = new EventEmitter<string>();

  onInput(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.search.emit(value);
  }
}
