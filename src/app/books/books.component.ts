import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NEVER } from 'rxjs';
import { DataServices } from '../data.services';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  // books = [
  //   {"id":1, "name":"Cien Años de Soledad"},
  //   {"id":2, "name":"El Nombre del Viento"},
  //   {"id":3, "name":"Humanos"},
  //   {"id":4, "name":"21 Lecciones para el Siglo XXI"},
  //   {"id":5, "name":"Dune"},
  //   {"id":6, "name":"Prueba"},
  // ]

  my_books: any = [];
  no_books: any = [];
  books: any = [];

  constructor(private router: Router, private dataService: DataServices) { }

  ngOnInit(): void {
    this.dataService.loadBooks().subscribe(my_books =>{
      if (my_books != null) {
        this.books = Object.values(my_books), 
        this.load_my_books(Object.values(my_books)),
        this.load_books(Object.values(my_books))
      }
    });

    
  }

  load_my_books(all_books: any) {
    for (let i = 0; i < all_books.length; i++) {
      if (all_books[i].check) {
        this.my_books.push(all_books[i]);
      }
    }
  }

  load_books(all_books: any) {
    for (let i = 0; i < all_books.length; i++) {
      if (!all_books[i].check) {
        this.no_books.push(all_books[i]);
      }
    }
  }

  onSelect(book: any){
    this.router.navigate(['/indexcard', book.id]);
  }

  checkOnClick(check: boolean, book: any) {
    for (let i = 0; i<this.books.length; i++) {
      if (this.books[i].id == book.id) {

        if (check) {
          this.books[i].check = true;

        } else {
          this.books[i].check = false;
        }
        
        this.dataService.saveBooks(this.books);
      }
    }
    
  }

  ischecked(book: any) {
    for (let i = 0; i<this.books.length; i++) {
      if (this.books[i].id == book.id) {
        if (this.books[i].check) {
          return "checked";

        } else {
          return "";
        }
      }
    }
    return "";
  }

}
