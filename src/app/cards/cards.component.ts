import { Component } from '@angular/core';
import { CartQuantityService } from '../services/cart-quantity.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})

export class CardsComponent {
  items: any[] = [];

  constructor(private cartService: CartQuantityService, private router: Router){

  }

  ngOnInit(){
    this.items = this.cartService.getAllItems();
  }

  cartItems: any[] = [];

  //This function will add Item into cart
  addCartItems(item: any, index:number) {
    this.cartItems = this.cartService.addCartItems(item, index);
  }

}
