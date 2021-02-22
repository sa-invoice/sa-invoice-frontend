import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsEditorPageComponent } from './products-editor-page.component';

describe('ProductsEditorPageComponent', () => {
  let component: ProductsEditorPageComponent;
  let fixture: ComponentFixture<ProductsEditorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsEditorPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsEditorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
