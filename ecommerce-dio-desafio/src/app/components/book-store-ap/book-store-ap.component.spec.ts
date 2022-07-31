import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookStoreApComponent } from './book-store-ap.component';

describe('BookStoreApComponent', () => {
  let component: BookStoreApComponent;
  let fixture: ComponentFixture<BookStoreApComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookStoreApComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookStoreApComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
