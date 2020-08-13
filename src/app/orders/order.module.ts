import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderListComponent } from './order-list/order-list.component';
import { SharedModule } from '../shared/shared.module';
import { MatTableModule } from '@angular/material/table';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [OrderListComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatTableModule,
    MatSliderModule,
    FormsModule
  ],
  exports: [OrderListComponent]
})
export class OrderModule { }
