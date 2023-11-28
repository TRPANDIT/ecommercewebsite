import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
  items = [
    {
      itemUrl: "assets/images/shoes.png",
      title: " Nike Green Shoes",
      desc: "Nike Men LeBron NXXT Gen Ep BasketBall Shoes",
      price: 3999
    },
    {
      itemUrl: "assets/images/earpod.png",
      title: "Apple airpods ",
      desc: "Apple Airpods(2nd Generation) CaseApple",
      price: 11999
    },
    {
      itemUrl: "assets/images/Hills.jpg",
      title: "RamayaLino Perros Block Heel Mules",
      desc: "A pair of nude-coloured mules, has Regular ankle and open back Synthetic leather solid upper cushioned footbed and patterned outsole, has block heels",
      price: 1299
    },
    {
      itemUrl: "assets/images/HalfShirt.jpg",
      title: "Armani Short-Sleeve Poplin Shirt",
      desc: "An ultra-comfortable button-through shirt in soft poplin fabric.",
      price: 999
    },
    {
      itemUrl: "assets/images/Lg Earphons.jpg",
      title: "LG V60 Earphones ThinQ/V6 Wireless",
      desc: "Bluetooth Earphones for LG V60 ThinQ/V 60 ThinQ Earphones Original Like Wireless",
      price: 799
    },
    {
      itemUrl: "assets/images/Hollister.jpg",
      title: "Hollister Men Denim Shirt",
      desc: "Hollister Men Denim Jeans Regular Fit Casual Shirt ",
      price: 999
    },
    {
      itemUrl: "assets/images/Denim Jeans.jpg",
      title: "Jack & Jones Denim Jeans",
      desc: "Jack & Jones Men Blue skinny Fit Low-Rise Clean Look Strechable Jeans",
      price: 1999
    },
    {
      itemUrl: "assets/images/Pink Jacket.jpg",
      title: "Women Jacket",
      desc: "Alano Unisex Wool Blend Comfortable and stylish Round Neck Full Sleeves Jacket",
      price: 1429

    },
    {
      itemUrl: "assets/images/Brown Jacket.jpg",
      title: "Allen Solly Jacket",
      desc: "Allen Solly Men's casual jacket Brown color 100% Polyster, A-Line Coat",
      price: 1999
    },
    {
      itemUrl: "assets/images/Slimfit jeans.jpg",
      title: "Louis stitch slimfit Jeans ",
      desc: "Louis stitch Women Slim Heavy Fade Clean Look Strechable Jeans",
      price: 3299
    }
  ];

  allCartItems: any[] = [];

  addCart(item: any) {
    const cartItem = {
      itemUrl: item.itemUrl,
      title: item.title,
      desc: item.desc,
      price: item.price
    };
    this.allCartItems.push(cartItem);
  }

  removeItems(index: number) {
    this.allCartItems.splice(index, 1);
  }

  quantity : number = 1;

  totalPrice : number = 100;
  price : number = 100;

  addQuantity(){
    this.quantity++;
      this.totalPrice = this.totalPrice + this.price;
  }

  removeQuantity(){
    if(this.quantity > 1){
      this.quantity--;
      this.totalPrice = this.totalPrice - this.price;
    }
  }

  calculateTotalPrice(): number {
    return this.allCartItems.reduce((total, item) => total + item.price * this.quantity, 0);
  }
}
