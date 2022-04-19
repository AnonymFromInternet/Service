import { CurrentUserInterface } from '../../shared/types/currentUser.interface';

// Interface for getting data from backend
export interface AuthResponseInterface {
  user: CurrentUserInterface;
}
