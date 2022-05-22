import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Add_bookRoutingModule } from './add_book-routing.module';
import { Add_bookComponent } from './add_book.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    Add_bookComponent
  ],
  imports: [
    CommonModule,
    Add_bookRoutingModule,
    FormsModule
  ]
})
export class Add_bookModule { }
