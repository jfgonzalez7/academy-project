import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderListComponent } from './order-list/order-list.component';
import { SharedModule } from '../shared/shared.module';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [OrderListComponent],
  imports: [CommonModule, SharedModule, MatTableModule],
  exports: [OrderListComponent]
})
export class OrderModule { }
