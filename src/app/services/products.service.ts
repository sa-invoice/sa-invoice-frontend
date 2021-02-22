import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  addProduct(body) {
    return this.http.post('https://invoicebe.herokuapp.com/api/products', body);
  }

  updateProduct(body, id) {
    return this.http.put('https://invoicebe.herokuapp.com/api/products/' + id, body);
  }

  getProducts() {
    return this.http.get('https://invoicebe.herokuapp.com/api/products');
  }

  getProductDetails(id) {
    return this.http.get('https://invoicebe.herokuapp.com/api/products/' + id);
  }

}
