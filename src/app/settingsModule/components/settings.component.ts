import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { filter, Observable, Subscription } from 'rxjs';
import { select, Store } from '@ngrx/store';

import { CurrentUserInterface } from '../../shared/types/currentUser.interface';
import { currentUserSelector } from '../../authModule/store/selectors';
import { updateCurrentUserAction } from '../../authModule/store/actions/updateCurrentUser.action';
import { BackendErrorsInterface } from '../../shared/types/backendErrors.interface';
import {
  isSubmittingSelector,
  validationErrorsSelector,
} from '../store/selectors';
import { CurrentUserInputInterface } from '../../shared/types/currentUserInput.interface';
import { logoutAction } from '../../authModule/store/actions/logout.action';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit, OnDestroy {
  isSubmitting$: Observable<boolean>;
  errors$: Observable<BackendErrorsInterface | null>;

  form: FormGroup;

  currentUser: CurrentUserInterface;
  currentUserSubscription: Subscription;

  constructor(private formBuilder: FormBuilder, private store: Store) {}

  ngOnInit(): void {
    this.initializeValues();
    this.initializeListeners();
  }
  ngOnDestroy(): void {
    this.currentUserSubscription.unsubscribe();
  }

  initializeValues(): void {
    this.errors$ = this.store.pipe(select(validationErrorsSelector));
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
  }

  initializeListeners(): void {
    this.currentUserSubscription = this.store
      .pipe(select(currentUserSelector), filter(Boolean))
      .subscribe((currentUser) => {
        this.currentUser = currentUser;
        this.initializeForm();
      });
  }

  initializeForm(): void {
    this.form = this.formBuilder.group({
      username: this.currentUser.username,
      password: '',
      email: this.currentUser.email,
      image: this.currentUser.image,
      bio: this.currentUser.bio,
    });
  }

  updateUserInfo(): void {
    const currentUserInput: CurrentUserInputInterface = {
      ...this.currentUser,
      ...this.form.value,
    };
    this.store.dispatch(updateCurrentUserAction({ currentUserInput }));
  }

  logout(): void {
    this.store.dispatch(logoutAction());
  }
}
