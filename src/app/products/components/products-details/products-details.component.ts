import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/products/product.service';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css'],
})
export class ProductsDetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}
  id: any;
  product:any;
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getProductDetails(this.id);
  }
  loader : boolean =false 

  getProductDetails(id: any) {
    this.loader = true
    this.productService.getSingleProduct(id).subscribe(
      (response) => {
        this.loader=false
        console.table(response);
        this.product=response
      },  
      (error) => {
        console.log(error);
      }
    );
  }

  cartProducts:any[]=[]
  exit:any
  addToCart(item:any){
     if ('cart' in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem('cart')!);
      this.exit = this.cartProducts.find((cartItem) => cartItem.id == item.id);
      if (this.exit) {
        alert('product exist in the cart');
      }
      this.cartProducts.push(item);
      localStorage.setItem('cart', JSON.stringify(this.cartProducts));
    } else {
      this.cartProducts.push(item);
      localStorage.setItem('cart', JSON.stringify(this.cartProducts));
    }
  }
}
