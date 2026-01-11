import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogTagsComponent } from './blog-tags.component';

describe('BlogTagsComponent', () => {
  let component: BlogTagsComponent;
  let fixture: ComponentFixture<BlogTagsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogTagsComponent]
    });
    fixture = TestBed.createComponent(BlogTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
