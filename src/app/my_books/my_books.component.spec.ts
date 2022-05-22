import { ComponentFixture, TestBed } from '@angular/core/testing';
import { My_booksComponent } from './my_books.component';

describe('My_booksComponent', () => {
  let component: ;
  let fixture: ComponentFixture<My_booksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ My_booksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(My_booksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
