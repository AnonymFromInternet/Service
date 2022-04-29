import { AuthStateInterface } from '../../authModule/types/authState.Interface';
import { FeedStateInterface } from '../modules/feed/types/feedState.interface';
import { PopularTagsStateInterface } from '../modules/popularTags/types/popularTagsState.interface';
import { ArticleStateInterface } from '../../articleModule/types/articleState.interface';

// Type for whole state
export interface AppStateInterface {
  auth: AuthStateInterface;
  feed: FeedStateInterface;
  popularTags: PopularTagsStateInterface;
  article: ArticleStateInterface;
}
