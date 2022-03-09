import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { ShoppingBasketComponent } from './shopping-basket/shopping-basket.component';
import { HttpClientModule } from '@angular/common/http';
import { ItemPickerComponent } from './item-picker/item-picker.component';
import { ShoppingBasketItemComponent } from './shopping-basket-item/shopping-basket-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingBasketComponent,
    ItemPickerComponent,
    ShoppingBasketItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatDividerModule,
    MatListModule,
    MatCardModule,
    FormsModule,
    MatSelectModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
