import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Meal } from '../single-rasturant.component';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-add-item-model',
  templateUrl: './add-item-model.component.html',
  styleUrls: ['./add-item-model.component.scss']
})
export class AddItemModelComponent implements OnInit {

  itemCount = 1;
  constructor(
    public dialogRef: MatDialogRef<AddItemModelComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Meal,
    private cartService: CartService
  ) {
    if (data.quantity > 0) {
      this.itemCount = data.quantity;
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  add() {
    this.itemCount = this.itemCount + 1;
  }
  remove() {
    this.itemCount = this.itemCount - 1;
  }
  ngOnInit() {
    // if (!this.data.deliveryDate) {
    //   this.data.deliveryDate = this.dates[0];
    //   this.data.deliveryTime = this.times[0];
    // }
  }

  addToCart() {

    this.data.quantity = this.itemCount;
    this.cartService.addToCart(this.data);
  }

}
