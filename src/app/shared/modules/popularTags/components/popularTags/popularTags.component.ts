import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { getPopularTagsAction } from '../../store/actions/getPopularTags.action';
import { PopularTagType } from '../../../../types/popularTag.type';
import {
  errorSelector,
  isLoadingSelector,
  popularTagsSelector,
} from '../../store/selectors';

@Component({
  selector: 'app-popular-tags',
  templateUrl: './popularTags.component.html',
  styleUrls: ['./popularTags.component.scss'],
})
export class PopularTagsComponent implements OnInit {
  popularTags$: Observable<PopularTagType[] | null>;
  isLoading$: Observable<boolean>;
  errors$: Observable<string | null>;

  constructor(private store: Store) {}
  ngOnInit() {
    this.fetchData();
    this.initializeValues();
  }
  initializeValues() {
    this.popularTags$ = this.store.pipe(select(popularTagsSelector));
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.errors$ = this.store.pipe(select(errorSelector));
  }
  fetchData(): void {
    this.store.dispatch(getPopularTagsAction());
  }
}
