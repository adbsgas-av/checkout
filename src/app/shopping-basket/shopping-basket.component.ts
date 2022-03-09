import { Component, OnInit } from '@angular/core';
import { IItem } from '../model/IItem';
import { ShoppingCartService } from '../services/shopping-cart.service';

@Component({
  selector: 'app-shopping-basket',
  templateUrl: './shopping-basket.component.html',
  styleUrls: ['./shopping-basket.component.scss']
})
export class ShoppingBasketComponent implements OnInit {

  constructor(private shoppingCartService: ShoppingCartService) { }

  public cartItems: IItem[];
  public totalPrice: number = 0;

  public ngOnInit(): void {
    this.cartItems = this.shoppingCartService.getItems();
    this.shoppingCartService.cartChanged.subscribe(() => {
      this.reloadCart();
      this.totalPrice = this.shoppingCartService.totalPrice;
    });
  }

  public reloadCart(): void {
    this.cartItems = this.shoppingCartService.getItems();
  }

}
