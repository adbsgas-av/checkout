import { EventEmitter, Injectable } from '@angular/core';
import { IItem } from '../model/IItem';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor() { }

  public basketItems: IItem[] = [];
  public totalPrice: number;

  public calculateTotal(): void {
    this.totalPrice = this.basketItems.reduce((runningTotal, currentItem) => runningTotal + currentItem.price, 0);
  }

  public addItem(item: IItem): void {
    const newItemsArr = [...this.basketItems, item] as IItem[];
    this.basketItems = newItemsArr;
    this.calculateTotal();
    this.cartChanged.emit();
  }

  public getItems() {
    return this.basketItems;
  }

  public cartChanged: EventEmitter<void> = new EventEmitter();
}
