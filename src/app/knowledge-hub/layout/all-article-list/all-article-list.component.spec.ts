import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllArticleListComponent } from './all-article-list.component';

describe('AllArticleListComponent', () => {
  let component: AllArticleListComponent;
  let fixture: ComponentFixture<AllArticleListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllArticleListComponent]
    });
    fixture = TestBed.createComponent(AllArticleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
