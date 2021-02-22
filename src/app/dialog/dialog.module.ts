import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog.component';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [DialogComponent],
  imports: [
    CommonModule,
    MatButtonModule
  ]
})
export class DialogModule { }
