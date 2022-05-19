import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexcardRoutingModule } from './indexcard-routing.module';
import { IndexcardComponent } from './indexcard.component';


@NgModule({
  declarations: [
    IndexcardComponent
  ],
  imports: [
    CommonModule,
    IndexcardRoutingModule
  ]
})
export class IndexcardModule { }
