import { Component } from '@angular/core';
import { CartQuantityService } from '../services/cart-quantity.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  quantityCount : number = 0;

  // let cart = 'hello';

  constructor(private cartService : CartQuantityService){

  }

  
}
