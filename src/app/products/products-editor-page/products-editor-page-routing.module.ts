import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsEditorPageComponent } from './products-editor-page.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsEditorPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsEditorPageRoutingModule { }
