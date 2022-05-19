import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books = [
    {"id":1, "name":"Cien Años de Soledad"},
    {"id":2, "name":"El Nombre del Viento"},
    {"id":3, "name":"Humanos"},
    {"id":4, "name":"21 Lecciones para el Siglo XXI"},
    {"id":5, "name":"Dune"},
  ]

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSelect(book: { id: any; }){
    this.router.navigate(['/indexcard', book.id]);

  }

}
