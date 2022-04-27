import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { PopularTagsComponent } from './components/popularTags/popularTags.component';
import { PopularTagsService } from './services/popularTags.service';
import { reducer } from './store/reducers';
import { GetPopularTagsEffect } from './store/effects/getPopularTags.effect';
import { EffectsModule } from '@ngrx/effects';
import { LoadingModule } from '../loading/loading.module';
import { ErrorMessageModule } from '../errorMessage/errorMessage.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('popularTags', reducer),
    EffectsModule.forFeature([GetPopularTagsEffect]),
    LoadingModule,
    ErrorMessageModule,
    RouterModule,
  ],
  declarations: [PopularTagsComponent],
  exports: [PopularTagsComponent],
  providers: [PopularTagsService],
})
export class PopularTagsModule {}
