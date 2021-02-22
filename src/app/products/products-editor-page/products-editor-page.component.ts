import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products-editor-page',
  templateUrl: './products-editor-page.component.html',
  styleUrls: ['./products-editor-page.component.scss']
})
export class ProductsEditorPageComponent implements OnInit {

  addProductForm: FormGroup;
  mode: string = '';
  id: string = '';
  
  constructor(
    private formBuilder: FormBuilder, 
    private productService: ProductsService, 
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {

    this.addProductForm = this.formBuilder.group({
      product_name: ['', [Validators.required]],
      product_discount_percent: [0, [Validators.required]],
      product_markup_percent: [20, [Validators.required]],
      product_price: [0, [Validators.required]],
      product_vat_percent: [5, [Validators.required]],
      product_price_currency: ['INR'],
      product_description: ['']
    });

    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      if(this.id === 'add') {
        this.mode = 'CREATE';
      } else {
        this.mode = 'READ';
        this.getProductDetails(this.id);
      }
    });

  }

  addProduct() {
    if(this.addProductForm.valid) {
      if(this.mode == 'CREATE') {
        this.productService.addProduct(this.addProductForm.value)
        .subscribe( 
          res => { this.router.navigate(['../', 'products'])},
          error => { console.log('Error')} 
        );
      } else {
        this.productService.updateProduct(this.addProductForm.value, this.id)
        .subscribe( 
          res => { this.router.navigate(['../', 'products'])},
          error => { console.log('Error')} 
        );
      }
    }
    else {
      return;
    }
  }

  getProductDetails(id) {
    this.productService.getProductDetails(id)
      .subscribe( 
        res => { this.addProductForm.patchValue(res)},
        error => { console.log('Error')} 
      );
  }

}
