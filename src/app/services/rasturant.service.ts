import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Meal } from '../single-rasturant/single-rasturant.component';

@Injectable({
  providedIn: 'root'
})
export class RasturantService {

  api = "http://localhost:3000";

  constructor(private httpClient: HttpClient) { }
  getRestaurants(): Observable<any>{
   return this.httpClient.get(this.api+"/restaurants");
  }
  getRecommendsItems(): Observable<any> {
    return this.httpClient.get(this.api+"/meals");
  }
}
