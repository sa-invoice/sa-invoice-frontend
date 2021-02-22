import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { InvoiceGeneratorPageRoutingModule } from './invoice-generator-page-routing.module';
import { InvoiceGeneratorPageComponent } from './invoice-generator-page.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule} from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { DialogModule } from '../../dialog/dialog.module'; 
@NgModule({
  declarations: [InvoiceGeneratorPageComponent],
  imports: [
    CommonModule,
    InvoiceGeneratorPageRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    DialogModule
  ]
})
export class InvoiceGeneratorPageModule { }
