import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexcardRoutingModule } from './indexcard-routing.module';
import { IndexcardComponent } from './indexcard.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    IndexcardComponent
  ],
  imports: [
    CommonModule,
    IndexcardRoutingModule,
    FormsModule
  ]
})
export class IndexcardModule { }
