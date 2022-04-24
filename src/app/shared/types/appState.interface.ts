import { AuthStateInterface } from '../../authModule/types/authState.Interface';
import { FeedStateInterface } from '../modules/feed/types/feedState.interface';

// Type for whole state?
export interface AppStateInterface {
  auth: AuthStateInterface;
  feed: FeedStateInterface;
}
