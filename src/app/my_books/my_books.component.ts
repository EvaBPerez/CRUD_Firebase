import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServices } from '../data.services';

@Component({
  selector: 'app-my_books',
  templateUrl: './my_books.component.html',
  styleUrls: ['./my_books.component.css']
})
export class My_booksComponent implements OnInit {

  all_books: any = [];
  books: any = [];

  
  constructor(private router: Router, private dataService: DataServices) { }

  ngOnInit(): void {
    this.dataService.loadBooks().subscribe(my_books =>{
      if (my_books != null) {
        this.all_books = Object.values(my_books), 
        this.load_my_books(Object.values(my_books))
      }
    });
  }

  load_my_books(all_books: any) {
    for (let i = 0; i < all_books.length; i++) {
      if (all_books[i].check) {
        this.books.push(all_books[i]);
      }
    }
  }

  onSelect(book: any){
    this.router.navigate(['/indexcard', book.id]);
  }

  checkOnClick(check: boolean, book: any) {
    for (let i = 0; i<this.all_books.length; i++) {
      if (this.all_books[i].id == book.id) {

        if (check) {
          this.all_books[i].check = true;

        } else {
          this.all_books[i].check = false;
        }
        
        this.dataService.saveBooks(this.all_books);
      }
    }
  }
  

}
