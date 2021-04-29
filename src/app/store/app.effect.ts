import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EmptyError, of } from 'rxjs';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';
import { HttpService } from '../services/http.service';
import { getAlbums, loadAlbumsSuccess, setQueryArtist } from './app.actions';

 
@Injectable()
export class AlbumsEffects {
 
  loadAbbums$ = createEffect(() =>
    this.actions$.pipe(
        ofType(setQueryArtist),
        mergeMap((action) => this.http.getAlbums(action.artist)
        .pipe(
          map(albums => loadAlbumsSuccess({albums: albums})),
          catchError(() => EmptyError )
        )
      )
    )
  );
 
  constructor(
    private actions$: Actions,
    private http: HttpService
  ) {}
}