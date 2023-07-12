import { Component, Input } from '@angular/core';
import Product from 'src/app/shared/models/product';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { ShoppingCartService } from 'src/app/shared/services/shopping-cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product: Product = new Product();

  constructor(private shoppingCartService: ShoppingCartService, private notificationService: NotificationService){}

  addToCartClick() {
    this.shoppingCartService.addItem(this.product);
    this.notificationService.successMessage("Item added to cart");
  }
}
