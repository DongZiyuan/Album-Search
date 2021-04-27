import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Album } from '../shared/models/album';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppState, State } from '../store/app.selector';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  baseUrl = 'https://itunes.apple.com/search';
  headers: HttpHeaders = new HttpHeaders({
    'Access-Control-Allow-Origin': 'http://localhost:4200',
  });

  constructor(private http: HttpClient, private store: Store<State>) {}

  getAlbums(artist: string): Observable<Album[]> {
    const params = new HttpParams()
      .append('term', artist)
      .append('media', 'music')
      .append('entity', 'album')
      .append('attribute', 'artistTerm')
      .append('limit', '500');

    return this.http
      .get<any>(this.baseUrl, { headers: this.headers, params: params })
      .pipe(
        map((data) => {
          return data['results'].map(
            (item: any): Album => ({
              artist: item['artistName'],
              collection: item['collectionName'],
              cover: item['artworkUrl100'],
              like: 0,
            })
          );
        })
      );
  }
}
