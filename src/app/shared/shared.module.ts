import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { ListHeaderComponent } from './list-header/list-header.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [CardComponent, ListHeaderComponent],
  imports: [CommonModule, AppRoutingModule],
  exports: [CardComponent, ListHeaderComponent]
})
export class SharedModule {}
