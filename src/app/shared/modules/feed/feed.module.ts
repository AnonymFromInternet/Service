import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { RouterModule } from '@angular/router';

import { FeedComponent } from './components/feed/feed.component';
import { GetFeedEffect } from './store/effects/getFeed.effect';
import { reducer } from './store/reducers';
import { FeedService } from './services/feed.service';
import { ErrorMessageModule } from '../errorMessage/errorMessage.module';
import { LoadingModule } from '../loading/loading.module';
import { PaginationModule } from '../pagination/pagination.module';
import { TagModule } from '../tag/tag.module';
import { AddToFavoritesModule } from '../addToFavorites/addToFavorites.module';

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetFeedEffect]),
    StoreModule.forFeature('feed', reducer),
    RouterModule,
    ErrorMessageModule,
    LoadingModule,
    PaginationModule,
    TagModule,
    AddToFavoritesModule,
  ],
  declarations: [FeedComponent],
  exports: [FeedComponent],
  providers: [FeedService],
})
export class FeedModule {}
