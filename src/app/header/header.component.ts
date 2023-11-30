import { Component } from '@angular/core';
import { CartQuantityService } from '../services/cart-quantity.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  items: any[] = [];

  constructor(
    private cartService: CartQuantityService,
    private router: Router
  ) {}

  ngOnInit() {
    this.items = this.cartService.getAllItems();
  }

  //This full will return total count of product inside cart
  totalItem() {
    return this.cartService.readCartQuantity();
  }

  //This will show all carts items
  showCartItems() {
    this.router.navigate(['carts']);
  }

  filterProduct: any[] = [];
  filterString: string = '';
  filterProducts() {
    this.filterProduct = this.items.filter((eachItem) => {
      return eachItem.bookTitle.startsWith(this.filterString);
    });
  }
}
