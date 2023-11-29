import { Component } from '@angular/core';
import { CartQuantityService } from '../services/cart-quantity.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  
  constructor(private cartService: CartQuantityService ,private router: Router) {}

  //This full will return total count of product inside cart
  totalItem() {
    return this.cartService.readCartQuantity();
  }

  showCartItems(){
    this.router.navigate(['carts']);
  }
}
