import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { contains } from 'jquery';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.getCartProducts();
  }
  cartProducts: any[] = [];
  getCartProducts() {
    this.cartProducts = JSON.parse(localStorage.getItem('cart')!);
    console.log(this.cartProducts);
  }

  minus(quantity: any, index: any) {
    let q = Number(quantity);
    if (q > 0 && q != 1) {
      console.log(q);
      this.cartProducts[index].quantity--;
      localStorage.setItem('cart', JSON.stringify(this.cartProducts));
    }
  }
  plus(quantity: any, index: any) {
    this.cartProducts[index].quantity++;
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
  }
  removeProduct(index: any) {
    this.cartProducts.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
  }

  totalPrice() {
    let price = 0;

    for (let index = 0; index < this.cartProducts.length; index++) {
      price =
        price +
        this.cartProducts[index].item.price * this.cartProducts[index].quantity;
    }
    return price;
  }
}
