import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { User } from '../interfaces/Ilogin';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  quantityList = [1,2,3,4,5,6,7,8,9,10];
  user: User;
  cartItems = new Array();
  constructor(private router: Router, 
    public loginService: LoginService,
    private cartService: CartService) {
  }

  ngOnInit() {
    this.loginService.loggedIn.subscribe(next => {
      this.user = next;
    });
    this.cartService.cart.subscribe(res => {
      this.cartItems = res;
    })
  }
  calculateTotalPriceOfCart () : number{
    let total = 0;
    this.cartItems.forEach(element => {
      total = total + (element.price * element.quantity);
    });
    return total;
  }
  addToCart(item) {
    this.cartService.addToCart(item);
  }
  openLoginSideNav(){
   // this.helperService.loginSideNav.next(true);
  }

}
