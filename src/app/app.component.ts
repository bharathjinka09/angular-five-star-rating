import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-five-star-rating';
  currentRate = 1;
  rating: any;

  constructor() {
    this.currentRate = JSON.parse(localStorage.getItem('rating'));
  }

  storeRating() {
    this.rating = localStorage.setItem(
      'rating',
      JSON.stringify(this.currentRate)
    );
  }
}
