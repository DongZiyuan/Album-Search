import { Album } from '../shared/models/album';
import { Query } from '../shared/models/query';

export type AppState = {
  loggedIn: boolean;
  query: Query;
  albums: Album[];
  // pageSize: number // config page number
};

export type State = {
  app: AppState;
};
