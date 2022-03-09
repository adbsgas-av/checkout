import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { IItem } from '../model/IItem';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { StockService } from '../services/stock.service';

@Component({
  selector: 'app-item-picker',
  templateUrl: './item-picker.component.html',
  styleUrls: ['./item-picker.component.scss']
})
export class ItemPickerComponent implements OnInit {

  constructor(
    private stockService: StockService,
    private shoppingCartService: ShoppingCartService
  ) { }

  public items: Observable<IItem[]>;

  @Input()
  public selectedItem: IItem;

  ngOnInit(): void {
    this.items = this.stockService.getItems();
  }

  public addItem(item: IItem) {
    this.shoppingCartService.addItem(item);
  }
}
