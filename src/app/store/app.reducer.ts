//@ts-nocheck
import { createReducer, on } from '@ngrx/store';
import * as AppActions from './app.actions';
import { AppState } from './app.selector';

const initialState: AppState = {
  loggedIn: true,
  query: { artist: ''},
  albums: []
};

export const AppReducer = createReducer(
  initialState,
  on(
    AppActions.setQueryArtist,
    (state: AppState, { artist }): AppState => {
      const newQuery = { ...state.query };
      newQuery.artist = artist;
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
    AppActions.loadAlbumsSuccess,
    (state, {albums}): AppState => ({
      ...state,
      albums: albums
    })
  )
  // on(
  //   AppActions.voteAlbum,
  //   (state: AppState, { id, score }): AppState => {
  //     const newAlbum = { ...state.albums[id], like: score };
  //     const newAlbums = { ...state.albums };
  //     newAlbums[id] = newAlbum;
  //     return { ...state, albums: newAlbums };
  //   }
  // ),
  // on(
  //   AppActions.setPageSize,
  //   (state: AppState, { size }): AppState => {
  //     return {...state, pageSize: size}
  //   }
  // )
);
