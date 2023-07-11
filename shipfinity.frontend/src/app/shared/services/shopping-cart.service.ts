import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import Product from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  private shoppingCart: Product[] = [];
  private cartSubject = new BehaviorSubject<Product[]>(this.shoppingCart);
  constructor() { }

  getCart() {
    return this.cartSubject.asObservable();
  }

  addItem(newItem: Product) {
    this.shoppingCart.push(newItem);
    this.cartSubject.next(this.shoppingCart);
  }

  removeItem(item: Product){
    const index = this.shoppingCart.indexOf(item);
    if(index !== -1){
      this.shoppingCart.splice(index, 1);
      this.cartSubject.next(this.shoppingCart);
    }
  }
}
