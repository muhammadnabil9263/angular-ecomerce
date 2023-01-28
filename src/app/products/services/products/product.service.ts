import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private url = 'https://api.escuelajs.co/api/v1/';
  // https://dummyjson.com/products
  // https://api.escuelajs.co/api/v1/
  constructor(private http: HttpClient) {}
  getAllProducts() {
    return this.http.get(this.url + 'products');
  }
  
  getAllCategories() {
    return this.http.get(this.url + 'categories');
  }

  getProductsbyCategory(id: any) {
    return this.http.get(this.url + 'products/?categoryId=' + id);
  }

  getSingleProduct(productId: any) {
    return this.http.get(this.url + 'products/' + productId);
  }
}
