import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable()
export class DeleteArticleService {
  constructor(private http: HttpClient) {}

  deleteArticle(slug: string): Observable<{}> {
    return this.http.delete<{}>(environment.apiUrl + '/articles/' + slug);
  }
}
