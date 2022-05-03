import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { filter, map, Observable } from 'rxjs';

import { ArticleInputInterface } from '../../shared/types/articleInput.interface';
import {
  articleAfterEditSelector,
  isLoadingSelector,
  isSubmittingSelector,
  validationErrorsSelector,
} from '../store/selectors';
import { BackendErrorsInterface } from '../../shared/types/backendErrors.interface';
import { ActivatedRoute } from '@angular/router';
import { getArticleAfterEditAction } from '../store/actions/getArticleAfterEdit.action';
import { editArticleAction } from '../store/actions/editArticle.action';
import { ArticleInterface } from '../../shared/types/article.interface';

@Component({
  selector: 'app-edit-article',
  templateUrl: './editArticle.component.html',
  styleUrls: ['./editArticle.component.scss'],
})
export class EditArticleComponent implements OnInit {
  slug: string;
  isSubmitting$: Observable<boolean>;
  backendErrors$: Observable<BackendErrorsInterface | null>;
  isLoading$: Observable<boolean>;
  initialValues$: Observable<ArticleInputInterface>;

  constructor(private store: Store, private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.initializeValues();
    this.fetchData();
  }

  editArticle(articleInput: ArticleInputInterface): void {
    this.store.dispatch(editArticleAction({ slug: this.slug, articleInput }));
  }

  initializeValues(): void {
    this.slug = this.route.snapshot.paramMap.get('slug');

    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector));

    this.initialValues$ = this.store.pipe(
      select(articleAfterEditSelector),
      filter(Boolean),
      map((article: ArticleInterface) => {
        return {
          title: article.title,
          description: article.description,
          body: article.body,
          tagList: article.tagList,
        };
      })
    );
  }

  fetchData(): void {
    this.store.dispatch(getArticleAfterEditAction({ slug: this.slug }));
  }
}
