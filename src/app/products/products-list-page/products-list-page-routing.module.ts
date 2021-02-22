import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsListPageComponent } from './products-list-page.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsListPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsListPageRoutingModule { }
