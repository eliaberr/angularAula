//abrir dois servidores, um angular e um json

import { Injectable } from '@angular/core';
import { Product } from './models/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  
  localhost: any;

  products : Product[] = [];
  baseUrl: string = "http://localhost:3000/products"

  constructor(private http: HttpClient) {

  }

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.baseUrl);
  }

  save(product: Product):  Observable<Product>{
    return this.http.post<Product>(this.baseUrl, product);
  }

  update(product: Product) : Observable<Product>{
    let url = `${this.baseUrl}/${product.id}`;
    return this.http.post<Product>(url, product);
  }
  
  delete(product: Product):Observable<void> {
    let url = `${this.baseUrl}/${product.id}`;
    return this.http.delete<void>(url);
  }
}
