import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  private shoppingCart: any[] = [];
  private cartSubject = new BehaviorSubject<any[]>(this.shoppingCart);
  constructor() { }

  getCart() {
    return this.cartSubject.asObservable();
  }

  addItem(newItem: any) {
    this.shoppingCart.push(newItem);
    this.cartSubject.next(this.shoppingCart);
  }

  removeItem(item: any){
    const index = this.shoppingCart.indexOf(item);
    if(index !== -1){
      this.shoppingCart.splice(index, 1);
      this.cartSubject.next(this.shoppingCart);
    }
  }
}
