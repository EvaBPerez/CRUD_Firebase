import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { My_booksComponent } from './my_books.component';

const routes: Routes = [{ path: '', component: My_booksComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class My_booksRoutingModule { }
