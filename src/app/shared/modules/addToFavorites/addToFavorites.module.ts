import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddToFavoritesComponent } from './components/addToFavorites/addToFavorites.component';

@NgModule({
  imports: [CommonModule],
  exports: [AddToFavoritesComponent],
  providers: [],
  declarations: [AddToFavoritesComponent],
})
export class AddToFavoritesModule {}
