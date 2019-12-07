import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Meal } from '../single-rasturant/single-rasturant.component';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  api = "http://localhost:3000";
  cart = new BehaviorSubject(null);
  constructor(private httpClient: HttpClient) { 
    this.getCart();
  }
 

  getCart() {
     this.httpClient.get(this.api + "/cart").subscribe(res => {
      this.cart.next(res);
    });
  }
  addToCart(item: Meal) {
    this.httpClient.get(this.api + "/cart/" + item.id).subscribe(res => {
      this.httpClient.put(this.api+"/cart/" +item.id, item).subscribe(res => {
        console.log("success");
        this.getCart();
      });
    }, err => {
      this.httpClient.post(this.api + "/cart", item).subscribe(res => {
        console.log("success");
        this.getCart();
      });
    });
  }

}
