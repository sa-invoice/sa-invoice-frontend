import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  constructor(private http: HttpClient) {   
  }

  getCalculations(body) {
    return this.http.post('https://invoicebe.herokuapp.com/api/invoices?dryrun=true', body);
  }

  generateInvoice(body) {
    return this.http.post('https://invoicebe.herokuapp.com/api/invoices?dryrun=false', body);
  }

  getClients() {
    return this.http.get('https://invoicebe.herokuapp.com/api/clients');
  }

  addClient(body) {
    return this.http.post('https://invoicebe.herokuapp.com/api/clients', body);
  }

  downloadInvoice(id) {
    return this.http.get('https://invoicebe.herokuapp.com/api/invoices/'+ id + '/download');
  }

  getInvoiceList() {
    return this.http.get('https://invoicebe.herokuapp.com/api/invoices');
  }

  getInvoiceDetails(id) {
    return this.http.get('https://invoicebe.herokuapp.com/api/invoices/' + id);
  }

}
