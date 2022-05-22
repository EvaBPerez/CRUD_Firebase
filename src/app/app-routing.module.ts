import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'my_books', loadChildren: () => import('./my_books/my_books.module').then(m => m.AuthorsModule) },
  { path: 'books', loadChildren: () => import('./books/books.module').then(m => m.BooksModule) },
  { path: 'add_book', loadChildren: () => import('./add_book/add_book.module').then(m => m.Add_bookModule) },
  { path: 'indexcard', loadChildren: () => import('./indexcard/indexcard.module').then(m => m.IndexcardModule) },
  { path: 'indexcard/:id', loadChildren: () => import('./indexcard/indexcard.module').then(m => m.IndexcardModule) },
  { path: '**', component: PagenotfoundComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [PagenotfoundComponent]
