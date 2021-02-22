import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'; 
import { InvoiceService } from '../services/invoice.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  constructor( private invoiceService: InvoiceService,
    public dialogRef: MatDialogRef<DialogComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: any) { } 
  
  onCancel(): void { 
    this.dialogRef.close(); 
  } 

  
  ngOnInit(): void {
  }

  downloadInvoice(id) {
    this.invoiceService.downloadInvoice(id).subscribe(
      res => {
        this.onCancel();
      },
      err => {
        console.log(err);
      }
    );
  }
  

}
