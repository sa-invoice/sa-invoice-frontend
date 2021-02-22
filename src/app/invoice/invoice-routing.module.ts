import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'invoice-list',
    loadChildren: () => import('src/app/invoice/invoice-list-page/invoice-list-page.module').then(m => m.InvoiceListPageModule)
  },
  {
    path: 'invoice-generator',
    loadChildren: () => import('src/app/invoice/invoice-generator-page/invoice-generator-page.module').then(m => m.InvoiceGeneratorPageModule)
  },
  {
    path: ':id',
    loadChildren: () => import('src/app/invoice/invoice-generator-page/invoice-generator-page.module').then(m => m.InvoiceGeneratorPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoiceRoutingModule { }
