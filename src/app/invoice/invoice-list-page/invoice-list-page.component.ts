import { Component, OnInit } from '@angular/core';
import { InvoiceService } from 'src/app/services/invoice.service';

@Component({
  selector: 'app-invoice-list-page',
  templateUrl: './invoice-list-page.component.html',
  styleUrls: ['./invoice-list-page.component.scss']
})
export class InvoiceListPageComponent implements OnInit {

  invoiceList: any = [];
  constructor(private invoiceService: InvoiceService) { }

  ngOnInit(): void {
    this.getInvoiceList();
  }

  getInvoiceList() {
    this.invoiceService.getInvoiceList().subscribe(
      res => {
        this.invoiceList = res;
      },
      err => {
      }
    );
  }


}
