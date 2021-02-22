import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('src/app/products/products-list-page/products-list-page.module').then(m => m.ProductsListPageModule)
  },
  {
    path: ':id',
    loadChildren: () => import('src/app/products/products-editor-page/products-editor-page.module').then(m => m.ProductsEditorPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
