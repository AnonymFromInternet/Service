import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { ReactiveFormsModule } from '@angular/forms';

import { SettingsComponent } from './components/settings.component';
import { reducer } from './store/reducer';
import { BackendErrorMessagesModule } from '../shared/modules/backendErrorMessages/backendErrorMessages.module';

const routes: Routes = [
  {
    path: 'settings',
    component: SettingsComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('settings', reducer),
    ReactiveFormsModule,
    BackendErrorMessagesModule,
  ],
  exports: [],
  providers: [],
  declarations: [SettingsComponent],
})
export class SettingsModule {}
