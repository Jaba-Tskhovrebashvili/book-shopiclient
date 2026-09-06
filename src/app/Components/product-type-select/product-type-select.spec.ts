import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductTypeSelect } from './product-type-select';

describe('ProductTypeSelect', () => {
  let component: ProductTypeSelect;
  let fixture: ComponentFixture<ProductTypeSelect>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductTypeSelect],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductTypeSelect);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
