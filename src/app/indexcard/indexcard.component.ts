import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataServices } from '../data.services';

@Component({
  selector: 'app-indexcard',
  templateUrl: './indexcard.component.html',
  styleUrls: ['./indexcard.component.css']
})
export class IndexcardComponent implements OnInit {

  public bookId: number | undefined;
  public book: any = {
    id: 0,
    name: '',
    check: false
  }
  public all_books: any = [];
  constructor(private route: ActivatedRoute, 
    private dataServices: DataServices, 
    private router: Router) {
  }

  ngOnInit(): void {
    this.bookId = Number(this.route.snapshot.paramMap.get('id'));
    this.getBook(this.bookId);

    this.dataServices.loadBooks().subscribe(my_books =>{
      this.all_books = Object.values(my_books),
      this.getBook(Object.values(my_books))
    });
  }

  getBook(books: any) {
    for (let i = 0; i < books.length; i++) {
      if (books[i].id == this.bookId) {
          this.book = books[i];
      }
    }
  }

  onSubmitEdit(form: NgForm) {
    this.book.name = form.value.name;
    this.dataServices.loadBooks().subscribe(my_books =>{
      this.searchBook(Object.values(my_books));
    });

    form = this.book.name;
  }

  searchBook(books: any) {
    let exist = false;
    let id = 1;
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
      this.updateBook();
    }

  }

  updateBook() {
    for (let i = 0; i < this.all_books.length; i++) {
      if (this.all_books[i].id == this.book.id) {
        this.all_books[i].name = this.book.name;
        break;
      }
    }

    this.dataServices.saveBooks(this.all_books);
  }

  deleteBook() {
    for (let i = 0; i < this.all_books.length; i++) {
      if (this.all_books[i].id == this.book.id) {
        this.all_books.splice(i, 1);
        break;
      }
    }

    this.dataServices.saveBooks(this.all_books);
    this.router.navigate(['/books']);
    alert("Se ha eliminado el libro correctamente");

  }

}
