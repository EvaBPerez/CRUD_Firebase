import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Add_bookComponent } from './add_book.component';

describe('Add_bookComponent', () => {
  let component: Add_bookComponent;
  let fixture: ComponentFixture<Add_bookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Add_bookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Add_bookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
