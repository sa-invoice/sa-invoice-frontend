import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InvoiceService } from 'src/app/services/invoice.service';
import { ProductsService } from 'src/app/services/products.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/dialog/dialog.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-invoice-generator-page',
  templateUrl: './invoice-generator-page.component.html',
  styleUrls: ['./invoice-generator-page.component.scss']
})
export class InvoiceGeneratorPageComponent implements OnInit {

  invoiceForm: FormGroup;
  clientForm: FormGroup;
  products: any;
  calculations: any;
  clients: any;
  addedProducts: any = [];
  showLoader: boolean = false;
  clientType;
  currentClientAdded: boolean = false;
  id: string;
  mode: string;

  constructor(
    private fb: FormBuilder, 
    private productService: ProductsService, 
    private invoiceService: InvoiceService,
    public dialog: MatDialog,
    private route: ActivatedRoute
    ) {

     }

  ngOnInit(): void {
    this.invoiceForm = this.fb.group({
      client_id: ['', Validators.required],
      invoice_items: this.fb.array([])
    });

    this.clientForm = this.fb.group({
      client_name: ['', Validators.required],
      client_tin: [''],
      is_client_taxable: [null, Validators.required],
      // client_id: ['', Validators.required],
      client_address: ['', Validators.required],
      client_city: ['', Validators.required],
    });

    this.getClients();
    this.getProducts();

    // this.route.paramMap.subscribe(params => {
    //   this.id = params.get('id');
    //   if(this.id === 'invoice-generator') {
    //     this.mode = 'CREATE';
    //   } else {
    //     this.mode = 'READ';
    //     this.getInvoiceDetails(this.id);
    //   }
    // });

  }

  // getInvoiceDetails(id) {
  //   this.invoiceService.getInvoiceDetails(id)
  //     .subscribe( 
  //       res => { this.invoiceForm.patchValue(res)},
  //       error => { console.log('Error')} 
  //     );
  // }

  addInvoiceItem() {
    const item = this.fb.group({
      product_id: ['', Validators.required],
      product_discount_percent: [null, Validators.required],
      product_markup_percent: [null, Validators.required],
      product_quantity: [null, Validators.required]
    });
    (this.invoiceForm.get('invoice_items') as FormArray).push(item);
  }

  populateProductValues(event,i) {
    this.addedProducts.splice(i,1,event.value);
    const productData = {
      product_id: this.addedProducts[i].product_id,
      product_discount_percent: this.addedProducts[i].product_discount_percent,
      product_markup_percent: this.addedProducts[i].product_markup_percent,
      product_quantity: 1
    };
    (this.invoiceForm.get('invoice_items') as FormArray).at(i).patchValue(productData);
    this.checkClientType()
  }

  removeInvoiceItem(i: number) {
    (this.invoiceForm.get('invoice_items') as FormArray).removeAt(i);
  }

  getProducts() {
    this.showLoader = true;
    this.productService.getProducts()
      .subscribe( 
        res => { this.products = res; this.showLoader = false; },
        error => { console.log('Error'); this.showLoader = false;} 
      );
  }

  getClients() {
    this.showLoader = true;
    this.invoiceService.getClients()
    .subscribe( 
      res => { this.clients = res; this.showLoader = false },
      error => { console.log('Error'); this.showLoader = false;} 
    );
  }

  checkClientType() {
    if(this.clientType == 'existing' || this.currentClientAdded == true) {
      this.getCalculations();
    } else {
      this.addClient();
    } 
  }

  addClient() {
    this.showLoader = true;
    this.invoiceService.addClient(this.clientForm.value).subscribe(
      res => {
        const clientInfo: any = res;
        this.invoiceForm.patchValue({
          client_id: clientInfo.added_client.client_id
        });
        this.currentClientAdded = true;
        this.getCalculations();
        this.showLoader = false;
      },
      err => {
        this.showLoader = false;
      });
  }

  getCalculations() {
    this.showLoader = true;
    this.invoiceService.getCalculations(this.invoiceForm.value).subscribe(
      res => {
        this.calculations = res;
        (this.invoiceForm.get('invoice_items') as FormArray).patchValue(this.calculations.invoice_details.invoice_items)
        console.table(this.calculations.invoice_details.invoice_items);
        this.showLoader = false;
      },
      err => {
        this.showLoader = false;
      }
    );
  }

  resetData() {
    if(this.clientType !== undefined) {
      this.invoiceForm.reset();
      this.calculations = null;
      this.addedProducts = [];
      this.clientType = null;
      (this.invoiceForm.get('invoice_items') as FormArray).reset();
      for(let i = this.invoiceForm.value.invoice_items.length; i >= 0; i--) {
        (this.invoiceForm.get('invoice_items') as FormArray).removeAt(i);
      }
    } else {
      return
    }
  }

  generateInvoice() {
    this.invoiceService.generateInvoice(this.invoiceForm.value).subscribe(
      res => {
        this.showLoader = false;
        const invoiceData: any = res;
        this.openDialog(invoiceData.invoice_details.invoice_id);
      },
      err => {
        this.showLoader = false;
      }
    );
  }

  isTaxable(event) {
    if(event.value == 'yes') {
      this.clientForm.controls['client_tin'].setValidators([Validators.required]);
      this.clientForm.controls['client_tin'].updateValueAndValidity();
    } else {
      this.clientForm.controls['client_tin'].clearValidators();
      this.clientForm.controls['client_tin'].updateValueAndValidity();
    }
  }

  openDialog(id): void { 
   let dialogRef = this.dialog.open(DialogComponent, { 
      width: '400px', 
      data: { invoiceId: id } 
    }); 
    dialogRef.afterClosed().subscribe(result => { 
      this.resetData(); 
    });
  } 

}
