import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { ListHeaderComponent } from './list-header/list-header.component';
import { AppRoutingModule } from '../app-routing.module';
import { MessagesComponent } from './messages/messages.component';


@NgModule({
  declarations: [CardComponent, ListHeaderComponent,MessagesComponent],
  imports: [CommonModule, AppRoutingModule],
  exports: [CardComponent, ListHeaderComponent,MessagesComponent]
})
export class SharedModule {}
