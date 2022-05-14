import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addToFavoritesAction } from '../../store/actions/addToFavotires.action';

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

  constructor(private store: Store) {}
  ngOnInit(): void {
    this.favoritesCount = this.favoritesCountInput;
    this.isFavorited = this.isFavoritedInput;
  }

  like(): void {
    // Toggle
    this.store.dispatch(
      addToFavoritesAction({
        isFavorited: this.isFavorited,
        slug: this.articleSlugInput,
      })
    );
    if (this.isFavorited) {
      this.favoritesCount -= 1;
    } else {
      this.favoritesCount += 1;
    }
    this.isFavorited = !this.isFavorited;
  }
}
