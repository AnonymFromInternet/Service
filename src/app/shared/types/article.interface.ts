import { ProfileInterface } from './profile.interface';
import { TagType } from './tag.type';

export interface ArticleInterface {
  author: ProfileInterface;
  body: string;
  createdAt: string;
  description: string;
  favorited: boolean;
  favoritesCount: number;
  slug: string;
  tagList: TagType[];
  title: string;
  updatedAt: string;
}
