import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { My_booksRoutingModule } from './my_books-routing.module';
import { My_booksComponent } from './my_books.component';


@NgModule({
  declarations: [
  My_booksComponent
  ],
  imports: [
    CommonModule,
    My_booksRoutingModule
  ]
})
export class AuthorsModule { }
