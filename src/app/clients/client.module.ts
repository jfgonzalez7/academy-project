import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ClientAddComponent } from './client-add/client-add.component';
import { ClientListComponent } from './client-list/client-list.component';
import { MatSliderModule } from '@angular/material/slider';
import { MatTableModule } from '@angular/material/table'
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule, MatTooltipModule } from '@angular/material';



@NgModule({
  declarations: [ClientAddComponent, ClientListComponent],
  imports: [CommonModule, SharedModule, MatSliderModule, MatTableModule, 
    MatFormFieldModule, FormsModule, MatInputModule,MatTooltipModule],
  exports: [ClientAddComponent, ClientListComponent]
})
export class ClientModule { }
