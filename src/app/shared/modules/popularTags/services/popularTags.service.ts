import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { PopularTagType } from '../../../types/popularTag.type';
import { environment } from '../../../../../environments/environment';
import { GetPopularTagsResponseInterface } from '../types/getPopularTagsResponse.interface';

@Injectable()
export class PopularTagsService {
  constructor(private httpService: HttpClient) {}
  getPopularTags(): Observable<PopularTagType[]> {
    return this.httpService
      .get<GetPopularTagsResponseInterface>(environment.apiUrl + '/tags')
      .pipe(map((response: GetPopularTagsResponseInterface) => response.tags));
  }
}
