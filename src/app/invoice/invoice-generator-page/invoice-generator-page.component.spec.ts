import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceGeneratorPageComponent } from './invoice-generator-page.component';

describe('InvoiceGeneratorPageComponent', () => {
  let component: InvoiceGeneratorPageComponent;
  let fixture: ComponentFixture<InvoiceGeneratorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoiceGeneratorPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceGeneratorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
