import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  loader = new Array(2);
  orders = new Array();
  constructor(private orderService: OrdersService) { }

  ngOnInit() {
    this.orderService.getAllOrders().subscribe(res=>{
      this.orders = res;
    });
  }

}
