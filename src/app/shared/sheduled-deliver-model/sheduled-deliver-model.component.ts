import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ScheduleTime } from '../header/header.component';

@Component({
  selector: 'app-sheduled-deliver-model',
  templateUrl: './sheduled-deliver-model.component.html',
  styleUrls: ['./sheduled-deliver-model.component.scss']
})
export class SheduledDeliverModelComponent implements OnInit {
  dates = [
    "Today, Mon, 21 Oct",
    "Tomorrow, Tue, 22 Oct",
    "Wed, 23 Oct",
    "Thu, 24 Oct",
    "Fri, 25 Oct",
    "Sat, 26 Oct",
    "Sun, 27 Oct"
  ];
  times = [
    "01:00 am – 01:30 am",
    "01:00 am – 01:30 am",
    "01:00 am – 01:30 am",
    "01:00 am – 01:30 am",
    "01:00 am – 01:30 am",
    "01:00 am – 01:30 am",
    "01:00 am – 01:30 am",
    "01:00 am – 01:30 am",
    "01:00 am – 01:30 am",
    "01:00 am – 01:30 am",
    "01:00 am – 01:30 am",
    "01:00 am – 01:30 am",
    "01:00 am – 01:30 am",
    "01:00 am – 01:30 am",
    "01:00 am – 01:30 am",
    "01:00 am – 01:30 am",
    "01:00 am – 01:30 am",
    "01:00 am – 01:30 am",
    "01:00 am – 01:30 am",
    "01:00 am – 01:30 am",

  ];
  constructor(
    public dialogRef: MatDialogRef<SheduledDeliverModelComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ScheduleTime
    ) {
     
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    if (!this.data.deliveryDate) {
      this.data.deliveryDate = this.dates[0];
      this.data.deliveryTime = this.times[0];
    }
  }

}
