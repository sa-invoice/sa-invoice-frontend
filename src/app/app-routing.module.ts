import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'products',
    loadChildren: () => import('src/app/products/products.module').then(m => m.ProductsModule)
  },
  {
    path: 'invoice',
    loadChildren: () => import('src/app/invoice/invoice.module').then(m => m.InvoiceModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/invoice/invoice-list'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
