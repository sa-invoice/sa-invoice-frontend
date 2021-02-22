import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ProductsEditorPageRoutingModule } from './products-editor-page-routing.module';
import { ProductsEditorPageComponent } from './products-editor-page.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProductsEditorPageComponent],
  imports: [
    CommonModule,
    ProductsEditorPageRoutingModule,
    MatFormFieldModule,
    FlexLayoutModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ProductsEditorPageModule { }
