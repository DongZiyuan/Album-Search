import { createReducer, on } from '@ngrx/store';
import * as AppActions from './app.actions';
import { AppState } from './app.selector';

const initialState: AppState = {
  loggedIn: true,
  query: { artist: '', entity: '', price: 0 },
  albums: [],
};

export const AppReducer = createReducer(
  initialState,
  on(
    AppActions.login,
    (state: AppState): AppState => ({ ...state, loggedIn: true })
  ),
  on(
    AppActions.logout,
    (state: AppState): AppState => ({ ...state, loggedIn: false })
  ),
  on(
    AppActions.setQueryArtist,
    (state: AppState, { artist }): AppState => {
      const newQuery = { ...state.query };
      newQuery.artist = artist;
      return { ...state, query: newQuery };
    }
  ),
  on(
    AppActions.setQueryEntity,
    (state: AppState, { entity }): AppState => {
      const newQuery = { ...state.query };
      newQuery.entity = entity;
      return { ...state, query: newQuery };
    }
  ),
  on(
    AppActions.setQueryPrice,
    (state: AppState, { price }): AppState => {
      const newQuery = { ...state.query };
      newQuery.price = price;
      return { ...state, query: newQuery };
    }
  ),
  on(
    AppActions.setAlbums,
    (state: AppState, { albums }): AppState => ({
      ...state,
      albums: albums,
    })
  ),
  on(
    AppActions.voteAlbum,
    (state: AppState, { id, score }): AppState => {
      const newAlbum = { ...state.albums[id], like: score };
      const newAlbums = { ...state.albums };
      newAlbums[id] = newAlbum;
      return { ...state, albums: newAlbums };
    }
  )
);
