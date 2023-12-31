import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [CardComponent],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],exports:[CardComponent]
})
export class SharedModule { }
