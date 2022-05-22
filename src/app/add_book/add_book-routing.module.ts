import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Add_bookComponent } from './add_book.component';

const routes: Routes = [{ path: '', component: Add_bookComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Add_bookRoutingModule { }
