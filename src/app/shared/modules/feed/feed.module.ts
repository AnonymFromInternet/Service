import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { FeedComponent } from './components/feed/feed.component';
import { GetFeedEffect } from './store/effects/getFeed.effect';
import { reducer } from './store/reducers';
import { FeedService } from './services/feed.service';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetFeedEffect]),
    StoreModule.forFeature('feed', reducer),
    RouterModule,
  ],
  declarations: [FeedComponent],
  exports: [FeedComponent],
  providers: [FeedService],
})
export class FeedModule {}
