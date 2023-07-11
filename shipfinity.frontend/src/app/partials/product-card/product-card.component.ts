import { Component, Input } from '@angular/core';
import Product from 'src/app/shared/models/product';
import { ShoppingCartService } from 'src/app/shared/services/shopping-cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product: Product = new Product();

  constructor(private shoppingCartService: ShoppingCartService){}

  addToCartClick() {
    this.shoppingCartService.addItem(this.product);
  }
}
