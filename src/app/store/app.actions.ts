import { createAction, props } from '@ngrx/store';
import { Album } from '../shared/models/album';

export const setQueryArtist = createAction(
  '[AppComponent] Set Query Artist',
  props<{ artist: string }>()
);

export const loadAlbumsSuccess = createAction(
  '[Albums API] Loaded Success',
  props<{albums: Album[]}>()
);

export const setAlbums = createAction(
  '[AlbumListComponent]',
  props<{ albums: Album[] }>()
);

export const getAlbums = createAction(
  '[Album Component] Load Albums',
  props<{ artist: string}>()
);

// export const voteAlbum = createAction(
//   '[AlbumListComponent]',
//   props<{ id: number; score: number }>()
// );

// export const setPageSize = createAction(
//   '[AlbumListComponent] Set page size',
//   props<{size: number}>()
// )
