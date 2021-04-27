import { createAction, props } from '@ngrx/store';
import { Album } from '../shared/models/album';

export const login = createAction('[AuthComponent] Login');

export const logout = createAction('[AuthComponent] Logout');

export const setQueryArtist = createAction(
  '[AppComponent] Set Query Artist',
  props<{ artist: string }>()
);

export const setQueryEntity = createAction(
  '[AppComponent] Set Query Entity',
  props<{ entity: string }>()
);

export const setQueryPrice = createAction(
  '[AppComponent] Set Query Price',
  props<{ price: number }>()
);

export const setAlbums = createAction(
  '[AlbumListComponent]',
  props<{ albums: Album[] }>()
);

export const voteAlbum = createAction(
  '[AlbumListComponent]',
  props<{ id: number; score: number }>()
);
