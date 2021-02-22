import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvoiceGeneratorPageComponent } from './invoice-generator-page.component';

const routes: Routes = [
  {
    path:'',
    component: InvoiceGeneratorPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoiceGeneratorPageRoutingModule { }
