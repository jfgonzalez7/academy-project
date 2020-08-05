import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { ListHeaderComponent } from './list-header/list-header.component';

@NgModule({
  declarations: [CardComponent, ListHeaderComponent],
  imports: [CommonModule],
  exports: [CardComponent, ListHeaderComponent]
})
export class SharedModule {}
