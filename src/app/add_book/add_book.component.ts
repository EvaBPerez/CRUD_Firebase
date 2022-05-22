import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DataServices } from '../data.services';

@Component({
  selector: 'app-add_book',
  templateUrl: './add_book.component.html',
  styleUrls: ['./add_book.component.css']
})
export class Add_bookComponent implements OnInit {
  
  constructor(private dataService: DataServices,
      private router: Router) { }
    public book: any = {
      id: 1,
      name: '',
      check: false
    }

    books: any = [];

  ngOnInit(): void {
  }

  searchBook(books: any) {
    let exist = false;
    let id = 1;
    if (books != null) {
      for (let i = 0; i < books.length; i++) {
        if (id == books[i].id) {
          id++;
        }
  
        if (books[i].name == this.book.name) {
          alert("Este libro ya existe");
          exist = true;
          break;
        }
      }
  
      if (!exist) {
        if (books[books.length -1].id != id) {
          this.book.id = id;
  
        } else {
          this.book.id = id++;
        }

        this.addBook();
      }
    }

    
  
  }

  onSubmit(form: NgForm) {
    this.book.name = form.value.name;
    this.dataService.loadBooks().subscribe(my_books =>{
      if (my_books != null) {
        this.books = Object.values(my_books)
      }
      this.searchBook(my_books)
    });
    
    form.reset();
  }

  addBook() {
    if (this.books.length == 0) {
      this.books[0] = this.book;
    } else {
      this.books.push(this.book);
    }

    this.dataService.saveBooks(this.books);
    this.router.navigate(['/books']);

    alert("El libro ha sido añadido correctamente");
  }

}
