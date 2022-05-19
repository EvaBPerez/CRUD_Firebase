import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexcardComponent } from './indexcard.component';

const routes: Routes = [{ path: '', component: IndexcardComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndexcardRoutingModule { }
