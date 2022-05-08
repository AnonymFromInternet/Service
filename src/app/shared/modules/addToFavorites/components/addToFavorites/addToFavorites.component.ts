import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-to-favorites',
  templateUrl: './addToFavorites.component.html',
  styleUrls: ['./addToFavorites.component.scss'],
})
export class AddToFavoritesComponent implements OnInit {
  @Input() isFavoritedInput: boolean;
  @Input() articleSlugInput: string;
  @Input() favoritesCountInput: number;

  favoritesCount: number;
  isFavorited: boolean;

  constructor() {}
  ngOnInit(): void {
    this.favoritesCount = this.favoritesCountInput;
    this.isFavorited = this.isFavoritedInput;
  }

  like(): void {
    // Toggle
    if (this.isFavorited) {
      this.favoritesCount -= 1;
    } else {
      this.favoritesCount += 1;
    }
    this.isFavorited = !this.isFavorited;
  }
}
