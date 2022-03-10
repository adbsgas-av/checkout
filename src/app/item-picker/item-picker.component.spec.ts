import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { StockService } from '../services/stock.service';

import { ItemPickerComponent } from './item-picker.component';

describe('ItemPickerComponent', () => {
  let component: ItemPickerComponent;
  let fixture: ComponentFixture<ItemPickerComponent>;
  let mockStockService: StockService = jasmine.createSpyObj('stockService', ['getItems']);
  let mockShoppingCartService: ShoppingCartService = jasmine.createSpyObj('shoppingCartService', ['getItems']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemPickerComponent ],
      providers: [
        {provide: StockService, useValue: mockStockService},
        {provide: ShoppingCartService, useValue: mockShoppingCartService},
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
