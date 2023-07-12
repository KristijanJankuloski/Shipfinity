import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import ProductOrder from '../models/product-order';
import Product from '../models/product';
@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  private shoppingCart: ProductOrder[] = [new ProductOrder(new Product(), 1)];
  private cartSubject = new BehaviorSubject<ProductOrder[]>(this.shoppingCart);
  constructor() { }

  getCart() {
    return this.cartSubject.asObservable();
  }

  addItem(newItem: ProductOrder) {
    this.shoppingCart.push(newItem);
    this.cartSubject.next(this.shoppingCart);
  }

  updateQuantity(item: ProductOrder, q: number){
    const index = this.shoppingCart.indexOf(item);
    if(index !== -1){
      this.shoppingCart[index].setQuantity(q);
    }
  }

  removeItem(item: ProductOrder){
    const index = this.shoppingCart.indexOf(item);
    if(index !== -1){
      this.shoppingCart.splice(index, 1);
      this.cartSubject.next(this.shoppingCart);
    }
  }
}
