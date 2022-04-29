import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './authModule/auth.module';
import { environment } from '../environments/environment';
import { TopBarModule } from './shared/modules/topBar/topBar.module';
import { PersistenceService } from './shared/services/persistence.service';
import { AuthInterceptor } from './shared/services/authInterceptor.service';
import { GlobalFeedModule } from './globalFeedModule/globalFeed.module';
import { YourFeedModule } from './yourFeedModule/yourFeed.module';
import { TagFeedModule } from './tagFeedModule/tagFeed.module';
import { ArticleModule } from './articleModule/article.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    EffectsModule.forRoot([]),
    StoreModule.forRoot({ router: routerReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
      autoPause: true,
    }),
    StoreRouterConnectingModule.forRoot(),
    AppRoutingModule,
    AuthModule,
    TopBarModule,
    GlobalFeedModule,
    YourFeedModule,
    TagFeedModule,
    ArticleModule,
  ],
  providers: [
    PersistenceService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
