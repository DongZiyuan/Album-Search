import { Album } from '../shared/models/album';
import { Query } from '../shared/models/query';

export type AppState = {
  loggedIn: boolean;
  query: Query;
  albums: Album[];
};

export type State = {
  app: AppState;
};
