import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';

import { isLoggedInSelector } from '../../../../../authModule/store/selectors';

@Component({
  selector: 'app-feed-toggler',
  templateUrl: './feedToggler.component.html',
})
export class FeedTogglerComponent implements OnInit {
  @Input() tagNameInput: string | null;
  isLoggedIn$: Observable<boolean>;

  constructor(private store: Store) {}
  ngOnInit(): void {
    this.initializeValues();
  }

  initializeValues() {
    this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector));
  }
}
