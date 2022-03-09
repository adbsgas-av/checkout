import { Component, Input } from '@angular/core';
import { IItem } from '../model/IItem';

@Component({
  selector: 'app-shopping-basket-item',
  templateUrl: './shopping-basket-item.component.html',
  styleUrls: ['./shopping-basket-item.component.scss']
})
export class ShoppingBasketItemComponent {

  constructor() { }

  @Input()
  public item: IItem;

}
