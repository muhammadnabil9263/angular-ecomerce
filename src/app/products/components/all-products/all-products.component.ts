import { Component, OnInit, ViewChild } from '@angular/core';
import { contains } from 'jquery';

import { ProductService } from '../../services/products/product.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css'],
})
export class AllProductsComponent implements OnInit {
  public loader: boolean = false;

  cartItems: any = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  products: any;
  id: any;

  getProducts() {
    this.loader = true;
    this.productService.getAllProducts().subscribe(
      (response) => {
        this.loader = false;

        this.products = response;
      },
      (error) => {
        this.loader = true;
        console.log(error);
      }
    );
  }

  categories: any = [
    { id: 0, name: 'All' },
    { id: 1, name: 'Clothes' },
    { id: 2, name: 'Electronics' },
    { id: 3, name: 'Furniture' },
    { id: 4, name: 'Shoes' },
    { id: 5, name: 'Others' },
  ];

  filterProducts(event: any) {
    this.loader = true;

    if (event.target.value == 'All') {
      this.getProducts();
    } else {
      this.productService.getProductsbyCategory(event.target.value).subscribe(
        (response) => {
          this.loader = false;
          this.products = response;
          console.log(response)
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

  addItemToCart(event: any) {
    if ('cart' in localStorage) {
      this.cartItems = JSON.parse(localStorage.getItem('cart')!);
      console.log(event.item.id);
      let exist = this.cartItems.find(
        (cartItem: any) => cartItem.item.id == event.item.id
      );
      if (exist) {
        alert('item in cart');
      } else {
        if (event.quantity == 0) {
          alert('please inset Quantity');
        } else {
          this.cartItems.push(event);
          localStorage.setItem('cart', JSON.stringify(this.cartItems));
          console.log(this.cartItems);
        }
      }
    } else {
      if (event.quantity == 0) {
        alert('please inset Quantity');
      } else {
        this.cartItems.push(event);
        localStorage.setItem('cart', JSON.stringify(this.cartItems));
      }
    }
  }
}
