import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartQuantityService {
  //This is all products
  items = [
    {
      itemUrl: 'assets/images/shoes.png',
      title: ' Nike Green Shoes',
      desc: 'Nike Men LeBron NXXT Gen Ep BasketBall Shoes',
      price: 3999,
      stock: 10,
    },
    {
      itemUrl: 'assets/images/earpod.png',
      title: 'Apple airpods ',
      desc: 'Apple Airpods(2nd Generation) CaseApple',
      price: 11999,
      stock: 10,
    },
    {
      itemUrl: 'assets/images/Hills.jpg',
      title: 'RamayaLino Perros Block Heel Mules',
      desc: 'A pair of nude-coloured mules, has Regular ankle and open back Synthetic leather solid upper cushioned footbed and patterned outsole, has block heels',
      price: 1299,
      stock: 10,
    },
    {
      itemUrl: 'assets/images/HalfShirt.jpg',
      title: 'Armani Short-Sleeve Poplin Shirt',
      desc: 'An ultra-comfortable button-through shirt in soft poplin fabric.',
      price: 999,
      stock: 10,
    },
    {
      itemUrl: 'assets/images/Lg Earphons.jpg',
      title: 'LG V60 Earphones ThinQ/V6 Wireless',
      desc: 'Bluetooth Earphones for LG V60 ThinQ/V 60 ThinQ Earphones Original Like Wireless',
      price: 799,
      stock: 10,
    },
    {
      itemUrl: 'assets/images/Hollister.jpg',
      title: 'Hollister Men Denim Shirt',
      desc: 'Hollister Men Denim Jeans Regular Fit Casual Shirt ',
      price: 999,
      stock: 10,
    },
    {
      itemUrl: 'assets/images/Denim Jeans.jpg',
      title: 'Jack & Jones Denim Jeans',
      desc: 'Jack & Jones Men Blue skinny Fit Low-Rise Clean Look Strechable Jeans',
      price: 1999,
      stock: 10,
    },
    {
      itemUrl: 'assets/images/Pink Jacket.jpg',
      title: 'Women Jacket',
      desc: 'Alano Unisex Wool Blend Comfortable and stylish Round Neck Full Sleeves Jacket',
      price: 1429,
      stock: 10,
    },
    {
      itemUrl: 'assets/images/Brown Jacket.jpg',
      title: 'Allen Solly Jacket',
      desc: "Allen Solly Men's casual jacket Brown color 100% Polyster, A-Line Coat",
      price: 1999,
      stock: 10,
    },
    {
      itemUrl: 'assets/images/Slimfit jeans.jpg',
      title: 'Louis stitch slimfit Jeans ',
      desc: 'Louis stitch Women Slim Heavy Fade Clean Look Strechable Jeans',
      price: 3299,
      stock: 10,
    },
  ];

  //this function will return all products to every component
  getAllItems() {
    return this.items;
  }

  cartItems: any[] = [];

  flag1: any = false;

  //This function will add Item into cart
  addCartItems(item: any, index: number) {
    let cartItem = {
      itemUrl: item.itemUrl,
      title: item.title,
      desc: item.desc,
      price: item.price,
      quantity: 1,
      cartCount: 1,
    };
    let flag = true;

    //this loop will check if item is present in cart then increase count of that product
    for (let i = 0; i < this.cartItems.length; i++) {
      if (item.title == this.cartItems[i].title) {
        this.cartItems[i].quantity++;
        this.cartItems[i].cartCount++;
        flag = false;
        break;
      }
    }
    if (flag) {
      this.cartItems.push(cartItem);
    }

    let newItem = this.items[index];
    newItem.stock--;
    this.items[index] = newItem;
    if (newItem.stock == 0) {
      this.flag1 = true;
    }
    console.log('Add Cart ' + newItem.stock);
    return this.cartItems;
  }

  //This function will remove item from cart
  removeCartItems(index: number) {
    this.cartItems.splice(index, 1);
  }

  //This function will increase quantity of particular item into cart
  increaseQuantity(index: number) {
    let item = this.cartItems[index];
    item.quantity++;
    item.cartCount++;
    item.totalPrice = item.totalPrice + item.price;

    let newItem = this.items[index];
    newItem.stock--;
    if (newItem.stock == 0) {
      this.flag1 = true;
    }
    this.items[index] = newItem;
    console.log('Add quantity ' + newItem.stock);
  }

  //This function will decrease quantity of particular item into cart
  decreaseQuantity(index: number) {
    let item = this.cartItems[index];
    if (item.quantity > 1) {
      item.quantity--;
      item.totalPrice = item.totalPrice - item.price;
      item.cartCount--;

      let newItem = this.items[index];
      newItem.stock++;
      this.items[index] = newItem;
      console.log('Remove quantity ' + newItem.stock);
    }
  }

  //This function will calculate total price of particular product
  calculateTotalPrice(index: number): number {
    let item = this.cartItems[index];
    return item.price * item.quantity;
  }

  //this is constructor
  constructor() {}

  //This full will return total count of product inside cart
  readCartQuantity() {
    let cartCount = 0;
    for (let i = 0; i < this.cartItems.length; i++) {
      cartCount = cartCount + this.cartItems[i].cartCount;
    }
    return cartCount;
  }


  getcartItems(){
    return this.cartItems;
  }
}
