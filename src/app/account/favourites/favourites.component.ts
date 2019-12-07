import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RasturantService } from 'src/app/services/rasturant.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit {
  loader = new Array(2);
  restaurants = new Array();
  loaderRestaurant = new Array(8);
  constructor(private router: Router, private restaurantService: RasturantService) {}
  ngOnInit() {
    this.restaurantService.getRestaurants().subscribe(res=>{
      this.restaurants = res;
    });
  }

}
