import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { ProductsListPageRoutingModule } from './products-list-page-routing.module';
import { ProductsListPageComponent } from './products-list-page.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [ProductsListPageComponent],
  imports: [
    CommonModule,
    ProductsListPageRoutingModule,
    MatListModule,
    FlexLayoutModule,
    MatButtonModule
  ]
})
export class ProductsListPageModule { }
