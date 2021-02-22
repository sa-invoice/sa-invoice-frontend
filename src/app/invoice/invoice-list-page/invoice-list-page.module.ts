import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoiceListPageRoutingModule } from './invoice-list-page-routing.module';
import { InvoiceListPageComponent } from './invoice-list-page.component';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [InvoiceListPageComponent],
  imports: [
    CommonModule,
    InvoiceListPageRoutingModule,
    MatListModule,
    MatButtonModule,
    FlexLayoutModule
  ]
})
export class InvoiceListPageModule { }
