import { Component } from '@angular/core';
import { CartQuantityService } from '../services/cart-quantity.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrl: './carts.component.css'
})
export class CartsComponent {

  items: any[] = [];
  constructor(private cartService: CartQuantityService, private router: Router){

  }

  ngOnInit(){
    this.items = this.cartService.getAllItems();
  }

  //this will give cart Items array 
  cartItems = this.cartService.cartItems;

   //This function will remove item from cart
  removeCartItems(index: number) {
    this.cartService.removeCartItems(index);
    this.router.navigate(['carts']);
  }

  //This function will increase quantity of particular item into cart
  increaseQuantity(index: number) {
    this.cartService.increaseQuantity(index);
    this.router.navigate(['carts']);
  }

  //This function will decrease quantity of particular item into cart
  decreaseQuantity(index: number) {
    this.cartService.decreaseQuantity(index);
    this.router.navigate(['carts']);
  }

  //This function will calculate total price of particular product
  calculateTotalPrice(index: number): number {
    return this.cartService.calculateTotalPrice(index);
  }
}
