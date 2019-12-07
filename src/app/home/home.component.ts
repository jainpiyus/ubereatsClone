import { Component, OnInit } from '@angular/core';
import { RasturantService } from '../services/rasturant.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  restaurants = new Array();
  loaderRestaurant = new Array(3);
  constructor(private resturantService: RasturantService, private router: Router) { }

  ngOnInit() {
    this.resturantService.getRestaurants().subscribe(res=>{
      this.restaurants = res;
    });
  }

  goToRestaurant(id){
    this.router.navigate(['restaurants/101']);
  }

}
