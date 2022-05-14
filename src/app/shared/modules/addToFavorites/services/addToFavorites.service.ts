import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { ArticleInterface } from '../../../types/article.interface';
import { environment } from '../../../../../environments/environment';
import { GetArticleResponseInterface } from '../../../types/getArticleResponse.interface';

@Injectable()
export class AddToFavoritesService {
  constructor(private http: HttpClient) {}

  like(slug: string): Observable<ArticleInterface> {
    const url = this.getUrl(slug);
    return this.http
      .post<GetArticleResponseInterface>(url, {})
      .pipe(map(this.getArticle));
  }

  dislike(slug: string): Observable<ArticleInterface> {
    const url = this.getUrl(slug);
    return this.http
      .delete<GetArticleResponseInterface>(url)
      .pipe(map(this.getArticle));
  }

  getUrl(slug: string): string {
    return `${environment.apiUrl}/articles/${slug}/favorite`;
  }

  getArticle(response: GetArticleResponseInterface): ArticleInterface {
    return response.article;
  }
}
